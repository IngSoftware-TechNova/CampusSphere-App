import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ApiImgPipe } from '../../../../core/pipes/api-img.pipe';
import { EventDetailsResponse } from '../../../../shared/models/event-details-response.model';

@Component({
  selector: 'app-event-info-page',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, ApiImgPipe],
  templateUrl: './event-info-page.component.html',
  styleUrl: './event-info-page.component.css'
})
export class EventInfoPageComponent {
  constructor(
    public dialogRef: MatDialogRef<EventInfoPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EventDetailsResponse
  ) {}
}
