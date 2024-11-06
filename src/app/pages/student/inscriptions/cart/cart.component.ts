import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../../../core/services/cart.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CheckoutService } from '../../../../core/services/checkout.service';
import { AuthService } from '../../../../core/services/auth.service';
import { InscriptionService } from '../../../../core/services/inscription.service';
import { InscriptionCreateUpdateRequest, InscriptionItemCreateUpdateRequest } from '../../../../shared/models/inscription-create-update.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: InscriptionItemCreateUpdateRequest[] = [];
  total: number = 0;
  loading = false;
  studentId!: number;

  private inscriptionService = inject(InscriptionService);
  private checkoutService = inject(CheckoutService);
  private cartService = inject(CartService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private authService = inject(AuthService);

  ngOnInit(): void {
    this.loadCart();
    this.studentId = this.authService.getUser()?.studentId || 0;

    const token = this.route.snapshot.queryParamMap.get('token');
    const payerId = this.route.snapshot.queryParamMap.get('PayerID');

    if (token && payerId) {
      this.loading = true;
      this.checkoutService.capturePaypalOrder(token)
        .subscribe(response => {
          if (response.completed) {
            this.clearCart();
            this.router.navigate(['/student/cart', response.inscriptionId]);
          }
        });
    }
  }

  loadCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getCartTotal();
  }

  removeItem(eventId: number): void {
    this.cartService.removeFromCart(eventId);
    this.loadCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.loadCart();
  }

  proceedToCheckout(): void {
    const cartItems = this.cartService.getCartItems();
    const inscriptionRequest: InscriptionCreateUpdateRequest = {
      total: this.total,
      studentId: this.studentId,
      items: cartItems.map((item) => ({
        eventId: item.eventId,
        nameEvent: item.nameEvent,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    this.loading = true;
    this.inscriptionService.create(inscriptionRequest)
      .subscribe(inscription => {
        this.checkoutService.createPaypalOrder(inscription.id)
          .subscribe(response => {
            window.location.href = response.paypalUrl;
          });
      });
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(value);
  }
}