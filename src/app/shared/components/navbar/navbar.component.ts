import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ApiImgPipe } from '../../../core/pipes/api-img.pipe';
import { UserProfileService } from '../../../core/services/user-profile.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserProfile } from '../../models/user-profile.model';
import { CartService } from '../../../core/services/cart.service';
import { CommonModule } from '@angular/common';

interface Notification {
  id: number;
  message: string;
  time: string;
  read: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, ApiImgPipe, MatSnackBarModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  profile!: UserProfile;
  private authService = inject(AuthService);
  private userProfileService = inject(UserProfileService);
  private router = inject(Router);
  private SnackBar = inject(MatSnackBar);
  private cartService = inject(CartService);

  isStudent: boolean = false;
  isAdmin: boolean = false;
  isAuthenticated: boolean = false;
  cartItemsCount: number = 0;

  notificationCount: number = 0;
  showNotifications: boolean = false;
  notifications: Notification[] = [];

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.isStudent = this.authService.getUserRole() === 'STUDENT';
    this.isAdmin = this.authService.getUserRole() === 'ADMIN';
    this.loadUserProfile();
    this.updateCartItemsCount();
    this.loadNotifications();
  }

  loadUserProfile(): void {
    const authData = this.authService.getUser();
    const userId = authData?.id;

    if (userId) {
      this.userProfileService.getUserProfile(userId).subscribe({
        next: (profile) => {
          this.profile = profile;
          
        },
        error: (error) => {
          this.showSnackBar('Error al cargar el perfil de usuario');
        }
      });
    } else {
    
      
    }
  }


  toggleFilters(): void {

  }

  toggleCart(): void {
    if (this.isStudent) {
      this.router.navigate(['/student/cart']);
    }

  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }

  markAllAsRead(): void {
    this.notifications = this.notifications.map(notification => ({
      ...notification,
      read: true
    }));
    this.notificationCount = 0;
  }

  private showSnackBar(message: string): void {
    this.SnackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }

  private updateCartItemsCount(): void {
    this.cartItemsCount = this.cartService.getCartItems().length;
  }

  private loadNotifications(): void {
    // Mock notifications - replace with actual API call
    this.notifications = [
      {
        id: 1,
        message: '¡Nuevo evento de programación disponible!',
        time: 'Hace 5 minutos',
        read: false
      },
      {
        id: 2,
        message: 'Recordatorio: El evento "Hackathon 2024" comienza mañana',
        time: 'Hace 1 hora',
        read: false
      }
    ];
    this.notificationCount = this.notifications.filter(n => !n.read).length;
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/']);
  }
}
