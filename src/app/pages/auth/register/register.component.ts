import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { MediaService } from '../../../core/services/media.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatCardModule, RouterLink, FormsModule, ReactiveFormsModule, MatSnackBarModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  registerForm: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private authService = inject(AuthService);
  private mediaService = inject(MediaService);
  
  constructor() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      career: ['', Validators.required]
    });
  }

  controlHasError(controlName:string, errorName:string): boolean {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;

      this.authService.register(userData).subscribe({
        next: () => {
          this.showSnackBar('Usuario creado correctamente');
          this.router.navigate(['/auth/login']);
        },
        error: (error) => {
          this.showSnackBar(error.error.message);
        }
      });
    }
  }

  private showSnackBar(message:string): void{
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }

}
