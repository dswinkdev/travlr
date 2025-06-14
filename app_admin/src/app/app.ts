import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TripListingComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'Travlr Getaway Admin!';
}
