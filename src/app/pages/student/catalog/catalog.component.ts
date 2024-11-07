import { Component, OnInit } from '@angular/core';
import { EventCardComponent } from '../../../shared/components/event-card/event-card.component';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../core/services/event.service';
import { AuthService } from '../../../core/services/auth.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventDetailsResponse } from '../../../shared/models/event-details-response.model';
import { EventDetailsComponent } from '../../../shared/components/event-details/event-details.component';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ApiImgPipe } from '../../../core/pipes/api-img.pipe';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, EventCardComponent, RouterOutlet, MatInputModule, MatIconModule, MatButtonModule, 
    MatDialogModule, FormsModule,
  ApiImgPipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit{
  events: EventDetailsResponse[] = [];
  filteredEvents: EventDetailsResponse[] = [];
  searchQuery: string = '';
  isLoading: boolean = true;

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.isLoading = true;
    this.eventService.getEventDetails().subscribe({
      next: (events) => {
        this.events = events;
        this.filteredEvents = events;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading events:', error);
        this.snackBar.open('Error al cargar los eventos', 'Cerrar', { duration: 3000 });
        this.isLoading = false;
      }
    });
  }

  openEventDetails(event: EventDetailsResponse): void {
    const dialogRef = this.dialog.open(EventDetailsComponent, {
      data: { eventId: event.id, isAuthenticated: this.authService.isAuthenticated() },
      width: '600px',
      maxHeight: '90vh'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle any actions after dialog is closed (e.g., refresh events list)
        this.loadEvents();
      }
    });
  }

  onSearch(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredEvents = this.events.filter(event =>
      event.name.toLocaleLowerCase().includes(query) ||
      event.categoryName.toLocaleLowerCase().includes(query) ||
      event.locationName.toLocaleLowerCase().includes(query)
    );
  }

}
