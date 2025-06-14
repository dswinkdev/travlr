import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';           
import { TripDataService } from '../services/trip-data'; 
import { TripCard } from '../trip-card/trip-card'; 

@Component({ 
  selector: 'app-trip-listing', 
  standalone: true, 
  imports: [CommonModule, TripCard], 
  templateUrl: './trip-listing.html', 
  styleUrls: ['./trip-listing.css'] 
}) 
export class TripListingComponent implements OnInit { 
  trips: Array<any> = []; 

  constructor(
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void { 
    this.tripDataService.getTrips().subscribe({
      next: (data) => this.trips = data,
      error: (err) => console.error('Failed to load trips:', err)
    });
  }

  addTrip(): void {
    this.router.navigate(['/add-trip']);
  }
}
