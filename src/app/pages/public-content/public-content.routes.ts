import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PublicContentLayoutComponent } from './public-content-layout/public-content-layout.component';
import { EventDetailsComponent } from '../../shared/components/event-details/event-details.component';

export const publicContentRoutes: Routes = [
  {
    path: '',
    component: PublicContentLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
    ]
  }
];
