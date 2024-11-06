import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EventCardComponent } from '../../../shared/components/event-card/event-card.component';
import { InterestService } from '../../../core/services/interest.service';
import { EventService } from '../../../core/services/event.service';
import { EventDetailsResponse } from '../../../shared/models/event-details-response.model';
import { EventDetailsComponent } from '../../../shared/components/event-details/event-details.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, EventCardComponent, MatDialogModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteEvents: EventDetailsResponse[] = [];
  isLoading: boolean = true;

  constructor(
    private interestService: InterestService,
    private eventService: EventService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadFavoriteEvents();
  }

  loadFavoriteEvents(): void {
    this.isLoading = true;
    this.interestService.getUserInterests().subscribe({
      next: (favoriteEventDTOs) => {
        const eventDetailsObservables = favoriteEventDTOs.map(dto =>
          this.eventService.getEventDetailsById(dto.eventId)
        );

        // Llama a cada observable para obtener los detalles completos
        Promise.all(eventDetailsObservables.map(obs => obs.toPromise()))
          .then(eventDetails => {
            this.favoriteEvents = eventDetails as EventDetailsResponse[];
            this.isLoading = false;
          })
          .catch(error => {
            console.error('Error loading full event details:', error);
            this.snackBar.open('Error al cargar detalles completos de eventos favoritos', 'Cerrar', { duration: 3000 });
            this.isLoading = false;
          });
      },
      error: (error) => {
        console.error('Error loading favorite events:', error);
        this.snackBar.open('Error al cargar los eventos favoritos', 'Cerrar', { duration: 3000 });
        this.isLoading = false;
      }
    });
  }

  openEventDetails(event: EventDetailsResponse): void {
    const dialogRef = this.dialog.open(EventDetailsComponent, {
      data: { eventId: event.id },
      width: '600px',
      maxHeight: '90vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadFavoriteEvents();
      }
    });
  }
}
