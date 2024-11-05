import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ApiImgPipe } from '../../../core/pipes/api-img.pipe';
import { UserProfileService } from '../../../core/services/user-profile.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserProfile } from '../../models/user-profile.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, ApiImgPipe, MatSnackBarModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  profile!: UserProfile;
  private authService = inject(AuthService);
  private userProfileService = inject(UserProfileService);
  private router = inject(Router);
  private SnackBar = inject(MatSnackBar);

  isAuthenticated: boolean = false;
  cartItemsCount: number = 0;

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.loadUserProfile();
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
          
        }
      });
    } else {
    
      
    }
  }


  toggleFilters(): void {

  }

  toggleCart(): void {

  }

  private showSnackBar(message: string): void {
    this.SnackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
  }
}
