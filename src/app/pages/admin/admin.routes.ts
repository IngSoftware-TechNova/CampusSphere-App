import { Routes } from '@angular/router';
import { EventListComponent } from './event-managment/event-list/event-list.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

export const adminRoutes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {path: 'events/list', component: EventListComponent},
        ]
    }
]