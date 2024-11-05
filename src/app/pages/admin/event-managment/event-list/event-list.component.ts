import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterOutlet } from '@angular/router';
import { ApiImgPipe } from '../../../../core/pipes/api-img.pipe';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { EventDetailsResponse } from '../../../../shared/models/event-details-response.model';
import { EventService } from '../../../../core/services/event.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventCardComponent } from '../../../../shared/components/event-card/event-card.component';
import { PageableResponse } from '../../../../shared/models/pageable.response.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, 
    EventCardComponent, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatDialogModule, FormsModule,
  ApiImgPipe],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent implements OnInit {

  events: EventDetailsResponse[] = [];
  filteredEvents: EventDetailsResponse[] = [];
  filterText: string = '';
  totalElements = 0;
  pageSize = 10;
  pageIndex = 0;

  private eventService = inject(EventService);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(pageIndex: number = 0, pageSize: number = 10): void {
    this.eventService.paginateEvents(pageIndex, pageSize).subscribe({
      next: (response: PageableResponse<EventDetailsResponse>) => {
        this.events = response.content;
        this.totalElements = response.totalElements;
        this.filteredEvents = this.events;
      },
      error: (error) => {
        this.snackBar.open('Error al cargar los eventos', 'Cerrar', { duration: 3000 });
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value
    .trim()
    .toLowerCase();
    this.filteredEvents = this.events.filter((event) =>
      event.name.toLowerCase().includes(filterValue) ||
      event.categoryName.toLowerCase().includes(filterValue) ||
      event.locationName.toLowerCase().includes(filterValue) ||
      event.cityName.toLowerCase().includes(filterValue)
    );
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadEvents(this.pageIndex, this.pageSize);
  }

  createEvent(): void {
    this.router.navigate(['admin/events/new']);
  }

  editEvent(eventId: number): void {
    this.router.navigate(['admin/events/edit', eventId]);
  }

  deleteEvent(eventId: number): void {
    if(confirm('¿Estas seguro que deseas eliminar este evento?')) {
      this.eventService.deleteEvent(eventId).subscribe({
        next: () => {
          this.snackBar.open('Evento eliminado correctamente', 'Cerrar', { duration: 3000 });
          this.loadEvents(this.pageIndex, this.pageSize);
        },
        error: (error) => {
          this.snackBar.open('Error al eliminar el evento', 'Cerrar', { duration: 3000 });
        }
      })
    }
  }

}
