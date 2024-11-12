
import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { ApiImgPipe } from '../../../core/pipes/api-img.pipe';
import { AuthService } from '../../../core/services/auth.service';
import { EventDetailsResponse } from '../../models/event-details-response.model';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { InterestService } from '../../../core/services/interest.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    MatCardModule, MatIconModule, MatButtonModule, FormsModule,EventDetailsComponent,  ApiImgPipe],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent implements OnInit{
  @Input() event!: EventDetailsResponse;
  isStudent: boolean = false;
  isAdmin: boolean = false;
  isFavorite: boolean = false;

  private authService = inject(AuthService);
  private interestService= inject(InterestService);
  private router = inject(Router);
  private snackBar= inject(MatSnackBar);
 
  constructor() {}

  ngOnInit(): void {
    this.isStudent = this.authService.getUserRole() === 'STUDENT';
    this.isAdmin = this.authService.getUserRole() === 'ADMIN';
  }

  openEventDetails() {
    const routePath = this.isStudent
      ? '/student/catalog/details'
      : '/home/event-details';
    this.router.navigate([routePath, this.event.id]);
  }
}