import { Routes } from '@angular/router';
import { EventListComponent } from './event-managment/event-list/event-list.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import EventFormComponent from './event-managment/event-form/event-form.component';
import  CategoryFormComponent  from './category-managment/category-form/category-form.component';
import { CategoryListComponent } from './category-managment/category-list/category-list.component';

export const adminRoutes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {path: 'events/list', component: EventListComponent},
            {path: 'events/new', component: EventFormComponent},
            {path: 'events/edit/:id', component: EventFormComponent},

            {path: 'categories/list', component: CategoryListComponent},
            {path: 'categories/new', component: CategoryFormComponent},
            {path: 'categories/edit/:id', component: CategoryFormComponent}
        ]
    }
]