import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PublicContentLayoutComponent } from './public-content-layout/public-content-layout.component';
import { EventInfoPageComponent } from './home/event-info-page/event-info-page.component';

export const publicContentRoutes: Routes = [
  {
    path: '',
    component: PublicContentLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'event-details/:id',
        component: EventInfoPageComponent
      },
    ]
  }
];
