import { Routes } from "@angular/router";

import { CatalogComponent } from "./catalog/catalog.component";
import { InscriptionsComponent } from "./inscriptions/inscriptions.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { CalendarComponent } from "./calendar/calendar.component";

import { UpdateProfileComponent } from "../../shared/components/update-profile/update-profile.component";
import { UserProfileComponent } from "../../shared/components/user-profile/user-profile.component";
import { StudentLayoutComponent } from "./student-layout/student-layout.component";

export const studentRoutes: Routes = [
    {
        path: '',
        component: StudentLayoutComponent,
        children: [
            {path: 'catalog', component: CatalogComponent},
            {path: 'inscription', component: InscriptionsComponent},
            {path: 'favorites', component: FavoritesComponent},
            {path: 'calendar', component: CalendarComponent},
            {path: 'profile', component: UserProfileComponent},
            {path: 'profile/update', component: UpdateProfileComponent},
        ]

    }
]