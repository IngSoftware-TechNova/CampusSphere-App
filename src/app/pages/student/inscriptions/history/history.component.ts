import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionResponse, InscriptionStatus } from '../../../../shared/models/inscription-response.model';
import { InscriptionService } from '../../../../core/services/inscription.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  inscriptions: (InscriptionResponse & { showDetails: boolean })[] = [];
  private inscriptionService = inject(InscriptionService);

  ngOnInit(): void {
    this.loadPurchaseHistory();
  }

  loadPurchaseHistory(): void {
    this.inscriptionService.getInscriptionHistory().subscribe({
      next: (data) => {
        this.inscriptions = data.map(inscription => ({
          ...inscription,
          showDetails: false
        }));
      },
      error: () => console.error('Error al cargar el historial de inscripciones')
    });
  }

  getPaymentStatusClass(status: InscriptionStatus): string {
    switch (status) {
      case InscriptionStatus.PAID:
        return 'status-paid';
      case InscriptionStatus.PENDING:
        return 'status-pending';
      default:
        return '';
    }
  }

  toggleDetails(inscription: InscriptionResponse & { showDetails: boolean }): void {
    inscription.showDetails = !inscription.showDetails;
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}