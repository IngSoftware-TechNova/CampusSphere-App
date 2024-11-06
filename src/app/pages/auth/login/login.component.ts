import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { AuthRequest } from '../../../shared/models/auth-request.model';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatCardModule, MatSnackBarModule, MatButtonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private authService = inject(AuthService);

  private readonly ADMIN_ROLE = 'ADMIN';
  private readonly STUDENT_ROLE = 'STUDENT';
  private readonly ADMIN_ROUTE = '/admin/events/list';
  private readonly STUDENT_ROUTE = '/student';
  private readonly DEFAULT_ROUTE = '/home';


  constructor(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  controlHasError(control:string, error:string){
    return this.loginForm.controls[control].hasError(error);
  }

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    };

    const credentials: AuthRequest = this.loginForm.value;

    this.authService.login(credentials).subscribe({
      next: () => {
        this.showSnackBar('Inicio de sesion exitoso');
        this.redirectUserBasedOnRole();
      },
      error: () => {
        this.showSnackBar('Error en el inicio de sesion. Por favor, intenta de nuevo');
      },
    });
  }

  private redirectUserBasedOnRole(): void {
    const userRole = this.authService.getUserRole();

    if (userRole === this.STUDENT_ROLE) {
      this.router.navigate([this.STUDENT_ROUTE]);
    } else if (userRole === this.ADMIN_ROLE) {
      this.router.navigate([this.ADMIN_ROUTE]);
    } else {
      this.router.navigate([this.DEFAULT_ROUTE]);
    }
  }

  private showSnackBar(message:string): void{
    this.snackBar.open(message, 'Close', {
      duration: 3,
      verticalPosition: 'top'
    });
  }

  
}
