import { Routes } from '@angular/router';

import { LoginComponent } from './login/login';
import { AddTripComponent } from './add-trip/add-trip';
import { EditTripComponent } from './edit-trip/edit-trip';
import { TripListingComponent } from './trip-listing/trip-listing';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-trip', component: AddTripComponent },
  { path: 'edit-trip', component: EditTripComponent },
  { path: '', component: TripListingComponent, pathMatch: 'full' },
];
