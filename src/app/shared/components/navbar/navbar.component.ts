import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private authService = inject(AuthService);

  isAuthenticated: boolean = false;
  cartItemsCount: number = 0;

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  toggleFilters(): void {

  }

  toggleCart(): void {

  }

  toggleUserMenu(): void {
    
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
  }
}
