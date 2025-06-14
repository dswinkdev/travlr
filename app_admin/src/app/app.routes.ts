import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip';
import { TripListingComponent } from './trip-listing/trip-listing';
import { EditTrip } from './edit-trip/edit-trip';

export const routes: Routes = [
  { path: 'add-trip', component: AddTripComponent },
  { path: '', component: TripListingComponent, pathMatch: 'full' },
  { path: 'edit-trip', component: EditTrip },
];
