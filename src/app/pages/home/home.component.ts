import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { EventDetails } from '../../shared/models/event-details.model';
import { HomeService } from '../../core/services/home.service';
import { ApiImgPipe } from '../../core/pipes/api-img.pipe';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EventDetailsDialogComponent } from './event-details-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, 
    MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatDialogModule, FormsModule,
  ApiImgPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  recentEvents: EventDetails[] = [];
  filteredEvents: EventDetails[] = [];
  searchQuery: string = '';

  private eventService = inject(HomeService);
  private dialog = inject(MatDialog);

  ngOnInit(): void {
    this.eventService.getRecentEvents().subscribe({
      next: (events) => {
        this.recentEvents = events;
        this.filteredEvents = events; //Inicialmente, mostrar todos los eventos
      },
      error: (error) => console.error('Error al cargar los libres recientes', error)
    });
  }

  onSearch(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredEvents = this.recentEvents.filter(event =>
      event.name.toLocaleLowerCase().includes(query) ||
      event.categoryName.toLocaleLowerCase().includes(query)
    );
  }

  openEventDetails(event: EventDetails): void {
    this.dialog.open(EventDetailsDialogComponent, {
      data: event,
      width: '500px'
    });
  }

}
