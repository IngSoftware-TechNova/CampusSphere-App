import { Component, inject, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { AuthRequest } from '../../../shared/models/auth-request.model';
import { ApiImgPipe } from '../../../core/pipes/api-img.pipe';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatSnackBarModule, MatButtonModule, RouterLink,
    ApiImgPipe, CommonModule, MatProgressSpinnerModule, MatTooltipModule, MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  imagePath: string = '0ff0d656-7189-48bc-b34c-f6dfcbf88579.png';

  loginForm:FormGroup;
  hidePassword = true;
  isLoading = false;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private authService = inject(AuthService);

  constructor(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  controlHasError(control:string, error:string){
    return this.loginForm.controls[control].hasError(error);
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    };

    this.isLoading = true;
    const credentials: AuthRequest = this.loginForm.value;

    this.authService.login(credentials).subscribe({
      next: () => {
        this.showSnackBar('Inicio de sesion exitoso');
        this.router.navigate(['/student'])
      },
      error: () => {
        this.showSnackBar('Error en el inicio de sesion. Por favor, intenta de nuevo');
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  private showSnackBar(message:string): void{
    this.snackBar.open(message, 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }
}
