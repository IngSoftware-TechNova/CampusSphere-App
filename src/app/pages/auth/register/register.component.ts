import { Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { MediaService } from '../../../core/services/media.service';
import { ApiImgPipe } from '../../../core/pipes/api-img.pipe';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    ApiImgPipe,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    ApiImgPipe
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  imagePath: string = 'add3604e-594b-4aac-bd93-cb549fd67032.png';

  registerForm: FormGroup;
  profileImagePreview: string | null = null;
  selectedFile: File | null = null;
  isLoading = false;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private authService = inject(AuthService);
  private mediaService = inject(MediaService);

  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }
  
  constructor() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      career: ['', Validators.required],
      profilePicPath: ['']
    });
  }

  controlHasError(controlName: string, errorName: string): boolean {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = e => this.profileImagePreview = e.target?.result as string;
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      if (this.selectedFile) {
        const formData = new FormData();
        formData.append('file', this.selectedFile);
        
        this.mediaService.upload(formData).subscribe({
          next: (response) => {
            const userData = {
              ...this.registerForm.value,
              profilePicPath: response.path
            };
            this.registerUser(userData);
          },
          error: (error) => {
            this.showSnackBar('Error al cargar la imagen de perfil.');
            console.error('Error uploading profile picture:', error);
            this.isLoading = false;
          }
        });
      } else {
        this.registerUser(this.registerForm.value);
      }
    }
  }

  private registerUser(userData: any) {
    this.authService.register(userData).subscribe({
      next: () => {
        this.showSnackBar('¡Bienvenido a CampusSphere! Tu cuenta ha sido creada.');
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        this.showSnackBar(error.error.message || 'Error al registrar el usuario');
        console.error('Error registering user:', error);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }
}