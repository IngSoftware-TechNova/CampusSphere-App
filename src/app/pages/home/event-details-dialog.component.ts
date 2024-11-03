import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EventDetails } from '../../shared/models/event-details.model';
import { ApiImgPipe } from '../../core/pipes/api-img.pipe';

@Component({
  selector: 'app-event-details-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, ApiImgPipe],
  template: `
    <h2 mat-dialog-title>{{ data.name }}</h2>
    <mat-dialog-content>
      <img [src]="data.imagePath | apiImg" [alt]="data.name" class="modal-image">
      <p class="modal-category">{{ data.categoryName }}</p>
      <p class="modal-location">
        <mat-icon>location_on</mat-icon>
        {{ data.locationName }}
      </p>
      <p class="modal-price" [ngClass]="{'free': data.priceValue === 0}">
        <mat-icon>{{ data.priceValue === 0 ? 'card_giftcard' : 'attach_money' }}</mat-icon>
        {{ data.priceValue === 0 ? 'Gratis' : (data.priceValue | currency:'S/.') }}
      </p>
      <p class="modal-description">{{ data.description }}</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cerrar</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .modal-image {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 1rem;
    }
    .modal-category {
      display: inline-block;
      background-color: #ff5722;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    .modal-date, .modal-location, .modal-price {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }
    .modal-date mat-icon, .modal-location mat-icon, .modal-price mat-icon {
      margin-right: 0.5rem;
      color: #ff5722;
    }
    .modal-price.free {
      color: #4caf50;
    }
    .modal-description {
      margin-top: 1rem;
      font-size: 1rem;
      line-height: 1.6;
    }
  `]
})
export class EventDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EventDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EventDetails
  ) {}
}