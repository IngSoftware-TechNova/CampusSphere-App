import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterOutlet } from '@angular/router';
import { ApiImgPipe } from '../../../core/pipes/api-img.pipe';
import { AuthService } from '../../../core/services/auth.service';
import { EventDetailsResponse } from '../../models/event-details-response.model';
import { EventDetailsComponent } from '../event-details/event-details.component';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    MatCardModule, MatIconModule, MatButtonModule, MatDialogModule, FormsModule,
  ApiImgPipe],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  @Input() event!: EventDetailsResponse;
  isStudent: boolean = false;
  isAdmin: boolean = false;

  private authService = inject(AuthService);
  private dialog = inject(MatDialog);
  router: any;

  constructor() {}

  ngOnInit(): void {
    this.isStudent = this.authService.getUserRole() === 'STUDENT';
    this.isAdmin = this.authService.getUserRole() === 'ADMIN';
  }

  openEventDetails(): void {
    this.dialog.open(EventDetailsComponent, {
      data: { eventId: this.event.id },
      width: '600px',
      maxHeight: '90vh'
    });
  }

}