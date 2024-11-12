import { CommonModule } from '@angular/common';
import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ApiImgPipe } from '../../../core/pipes/api-img.pipe';
import { EventDetailsResponse } from '../../models/event-details-response.model';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EventService } from '../../../core/services/event.service';
import { HomeService } from '../../../core/services/home.service';
import { AuthService } from '../../../core/services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CartService } from '../../../core/services/cart.service';
import { InscriptionItemCreateUpdateRequest } from '../../models/inscription-create-update.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InterestService } from '../../../core/services/interest.service';
import { Location } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import { forkJoin } from 'rxjs';
import { InscriptionService } from '../../../core/services/inscription.service';
import { CalendarService } from '../../../core/services/calendar.service';
import { EventItem, UserEventProgrammingDTO } from '../../models/user-event-programming-response.model';
import { InscriptionResponse, InscriptionStatus } from '../../models/inscription-response.model';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatDividerModule,
    ApiImgPipe],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent implements OnInit {
  @Input() eventId!: number;
  event: EventDetailsResponse | null = null;
  isAuthenticated = false;
  isEnrolled = false;
  isFavorite = false;
  isStudent = false;
  isLoading = true;
  error: string | null = null;
  enrollmentStatus: 'not-enrolled' | 'processing' | 'pending-payment' | 'pending-confirmation' | 'enrolled' = 'not-enrolled';
  eventSchedule: EventItem[] | null = null;

  constructor(
    private eventService: EventService,
    private inscriptionService: InscriptionService,
    private calendarService: CalendarService,
    private authService: AuthService,
    private interestService: InterestService,
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.isStudent = this.authService.getUserRole() === 'STUDENT';
    
    if (this.eventId) {
      this.loadEventDetails();
      this.checkEnrollmentStatus();
      this.loadFavoriteStatus();
    } else {
      this.error = 'No event ID provided';
      this.isLoading = false;
    }
  }

  loadEventDetails(): void {
    this.isLoading = true;
    this.error = null;
    this.eventService.getEventDetailsById(this.eventId).subscribe({
      next: (data) => {
        this.event = data;
        this.isLoading = false;
        console.log('Event details loaded:', this.event);
      },
      error: (err) => {
        console.error('Error loading event details:', err);
        this.error = 'Error al cargar detalles del evento';
        this.isLoading = false;
        this.showSnackBar('Error al cargar detalles del evento');
      }
    });
  }

  checkEnrollmentStatus(): void {
    console.log('Checking enrollment status...');
    forkJoin({
      inscriptions: this.inscriptionService.getInscriptionHistory(),
      calendarEvents: this.calendarService.getUserEvents()
    }).subscribe({
      next: ({ inscriptions, calendarEvents }) => {
        console.log('Inscriptions:', inscriptions);
        console.log('Calendar events:', calendarEvents);
        this.processInscriptions(inscriptions);
        this.processCalendarEvents(calendarEvents);
      },
      error: (error) => {
        console.error('Error checking enrollment status:', error);
        this.showSnackBar('Error al verificar el estado de inscripción');
      }
    });
  }

  private processInscriptions(inscriptions: InscriptionResponse[]): void {
    console.log('Processing inscriptions...');
    for (const inscription of inscriptions) {
      console.log('Checking inscription:', inscription);
      const eventItem = inscription.items.find(item => item.eventId === this.eventId);
      if (eventItem) {
        console.log('Event found in inscription:', eventItem);
        this.isEnrolled = true;
        this.updateEnrollmentStatus(inscription.inscriptionStatus, eventItem.price > 0);
        return;
      }
    }
    console.log('Event not found in inscriptions');
  }

  private processCalendarEvents(calendarEvents: UserEventProgrammingDTO[]): void {
    console.log('Processing calendar events...');
    const eventInCalendar = calendarEvents.find(event => 
      event.items.some(item => item.eventId === this.eventId.toString())
    );

    if (eventInCalendar) {
      console.log('Event found in calendar:', eventInCalendar);
      this.isEnrolled = true;
      this.enrollmentStatus = 'enrolled';
      this.eventSchedule = eventInCalendar.items.filter(item => item.eventId === this.eventId.toString());
    } else if (!this.isEnrolled) {
      console.log('Event not found in calendar and not enrolled');
      this.updateEnrollmentStatus();
    }
  }

  loadFavoriteStatus(): void {
    this.interestService.isEventFavorite(this.eventId).subscribe({
      next: (isFavorite) => {
        this.isFavorite = isFavorite;
        console.log('Favorite status:', this.isFavorite);
      },
      error: (error) => {
        console.error('Error checking favorite status:', error);
        this.showSnackBar('Error al verificar estado de favorito');
      }
    });
  }

  enrollInEvent(): void {
    if (!this.isStudent || this.isEnrolled) {
      return;
    }

    this.enrollmentStatus = 'processing';
    const cartItem: InscriptionItemCreateUpdateRequest = {
      eventId: this.eventId,
      nameEvent: this.event?.name || '',
      quantity: 1,
      price: this.event?.priceValue || 0
    };

    this.cartService.addToCart(cartItem);
    this.updateEnrollmentStatus();
    this.showSnackBar('Evento agregado al carrito');
  }

  toggleFavorite(): void {
    const action = this.isFavorite ? this.interestService.removeInterest(this.eventId) : this.interestService.addInterest(this.eventId);
    
    action.subscribe({
      next: () => {
        this.isFavorite = !this.isFavorite;
        this.showSnackBar(this.isFavorite ? 'Evento agregado a favoritos' : 'Evento eliminado de favoritos');
      },
      error: (error) => {
        console.error('Error toggling favorite:', error);
        this.showSnackBar('Error al actualizar favoritos');
      }
    });
  }

  getEnrollButtonIcon(): string {
    switch (this.enrollmentStatus) {
      case 'processing': return 'hourglass_empty';
      case 'pending-payment': return 'payment';
      case 'pending-confirmation': return 'schedule';
      case 'enrolled': return 'check_circle';
      default: return 'how_to_reg';
    }
  }

  getEnrollButtonText(): string {
    switch (this.enrollmentStatus) {
      case 'processing': return 'Procesando...';
      case 'pending-payment': return 'Pago pendiente';
      case 'pending-confirmation': return 'Confirmación pendiente';
      case 'enrolled': return 'Inscrito';
      default: return 'Inscribirse';
    }
  }

  goBackToHome(): void {
    this.location.back();
  }

  private updateEnrollmentStatus(inscriptionStatus?: InscriptionStatus, isPaidEvent: boolean = false): void {
    console.log('Updating enrollment status:', inscriptionStatus, 'isPaidEvent:', isPaidEvent);
    if (this.isEnrolled) {
      switch (inscriptionStatus) {
        case InscriptionStatus.PAID:
          this.enrollmentStatus = 'enrolled';
          break;
        case InscriptionStatus.PENDING:
          this.enrollmentStatus = isPaidEvent ? 'pending-payment' : 'pending-confirmation';
          break;
        default:
          this.enrollmentStatus = 'enrolled';
      }
    } else {
      const cartItems = this.cartService.getCartItems();
      const isInCart = cartItems.some(item => item.eventId === this.eventId);
      if (isInCart) {
        this.enrollmentStatus = this.event?.priceValue ? 'pending-payment' : 'pending-confirmation';
      } else {
        this.enrollmentStatus = 'not-enrolled';
      }
    }
    console.log('Updated enrollment status:', this.enrollmentStatus);
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', { duration: 3000 });
  }
}