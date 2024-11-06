import { CommonModule } from '@angular/common';
import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ApiImgPipe } from '../../../core/pipes/api-img.pipe';
import { EventDetailsResponse } from '../../models/event-details-response.model';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../../core/services/event.service';
import { HomeService } from '../../../core/services/home.service';
import { AuthService } from '../../../core/services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CartService } from '../../../core/services/cart.service';
import { InscriptionItemCreateUpdateRequest } from '../../models/inscription-create-update.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InterestService } from '../../../core/services/interest.service';


@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatCardModule, MatSnackBarModule, MatProgressSpinnerModule,ApiImgPipe],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent implements OnInit{
  event?: EventDetailsResponse;

  isAuthenticated = false;
  isEnrolled = false;
  isFavorite = false;
  isStudent: boolean = false;

  isLoading = true;
  error: string | null = null;

  constructor(
    private interestService: InterestService,
    private eventService: EventService,
    private homeService: HomeService,
    private authService: AuthService,
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<EventDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { eventId: number }
  ) {}

  ngOnInit(): void {
    console.log('Dialog data:', this.data); // Log the received data
    this.isAuthenticated = this.authService.isAuthenticated();
    this.isStudent = this.authService.getUserRole() === 'STUDENT';
    

    if (this.data && this.data.eventId) {
      this.loadEventDetails(this.data.eventId);
      this.loadFavoriteStatus();
    } else {
      this.error = 'No event ID provided';
      this.isLoading = false;
    }
  }

  loadFavoriteStatus(): void {
    this.isLoading = true;
    this.interestService.isEventFavorite(this.data.eventId).subscribe({
      next: (isFavorite) => {
        this.isFavorite = isFavorite;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al verificar el estado de favorito:', error);
        this.isLoading = false;
        this.snackBar.open('Error al cargar estado de favorito', 'Cerrar', { duration: 3000 });
      }
    });
  }


  loadEventDetails(eventId: number): void {
    this.isLoading = true;
    this.error = null;
    console.log('Loading event details for ID:', eventId); // Log the event ID being loaded
    this.homeService.getEventDetailsById(eventId).subscribe({
      next: (data) => {
        console.log('Received event data:', data); // Log the received event data
        this.event = data,
        this.checkEnrollmentStatus();
        this.checkFavoriteStatus();
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading event details:', err); // Log any errors
        this.error = 'Error al cargar detalles del evento';
        this.isLoading = false;
        this.showSnackBar('Error al cargar detalles del evento');
      }
    });
  }

  addToCart(): void {
    if (!this.isStudent) {
      this.showSnackBar('Debe iniciar sesión como estudiante para agregar al carrito');
      return;
    }

    const cartItem: InscriptionItemCreateUpdateRequest = {
      eventId: this.event?.id,
      eventName: this.event?.name,
      quantity: 1,
      price: this.event?.priceValue
    };

    //this.cartService.addToCart(cartItem).subscribe({
    //  next: () => {
    //    this.showSnackBar('Evento agregado al carrito');
    //  },
    //  error: (error) => {
    //    console.error('Error adding event to cart:', error);
    //    this.showSnackBar('Error al agregar el evento al carrito');
    //  }
    //});
  }

  enrollInEvent() {
    

  }

  toggleFavorite(): void {
    if (this.isFavorite) {
      this.interestService.removeInterest(this.data.eventId).subscribe({
        next: () => {
          this.isFavorite = false;
          this.snackBar.open('Evento eliminado de favoritos', 'Cerrar', { duration: 3000 });
        },
        error: (error) => {
          console.error('Error al eliminar de favoritos:', error);
          this.snackBar.open('Error al eliminar de favoritos', 'Cerrar', { duration: 3000 });
        }
      });
    } else {
      this.interestService.addInterest(this.data.eventId).subscribe({
        next: () => {
          this.isFavorite = true;
          this.snackBar.open('Evento agregado a favoritos', 'Cerrar', { duration: 3000 });
        },
        error: (error) => {
          console.error('Error al agregar a favoritos:', error);
          this.snackBar.open('Error al agregar a favoritos', 'Cerrar', { duration: 3000 });
        }
      });
    }
  }


  closeDialog(): void {
    this.dialogRef.close();
  }

  private checkEnrollmentStatus(): void {
    // Implement logic to check if the user is enrolled in this event
  }

  private checkFavoriteStatus(): void {
    // Implement logic to check if the event is in user's favorites
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }
  
}
