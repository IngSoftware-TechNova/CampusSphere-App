import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-student-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './student-layout.component.html',
  styleUrl: './student-layout.component.css',
  
  animations: [
    trigger('sidebarAnimation', [
      state('closed', style({
        transform: 'translateX(-100%)'
      })),
      state('open', style({
        transform: 'translateX(0)'
      })),
      transition('closed <=> open', animate('300ms ease-in-out'))
    ])
  ]
})

export class StudentLayoutComponent implements OnInit{
  isSidebarOpen = true;
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) {
      this.isSidebarOpen = false;
    } else {
      this.isSidebarOpen = true;
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
