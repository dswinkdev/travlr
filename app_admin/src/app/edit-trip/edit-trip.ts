import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrls: ['./edit-trip.css']
})
export class EditTrip implements OnInit {
  editForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
    const tripCode = localStorage.getItem('tripCode');
    if (!tripCode) {
      alert('No trip selected.');
      this.router.navigate(['/']);
      return;
    }

    this.tripDataService.getTrips().subscribe(trips => {
      const trip = trips.find(t => t.code === tripCode);
      if (!trip) {
        alert('Trip not found.');
        this.router.navigate(['/']);
        return;
      }

      this.editForm = this.fb.group({
        code: [{ value: trip.code, disabled: true }],
        name: [trip.name, Validators.required],
        length: [trip.length, Validators.required],
        start: [trip.start, Validators.required],
        resort: [trip.resort, Validators.required],
        perPerson: [trip.perPerson, Validators.required],
        image: [trip.image],
        description: [trip.description, Validators.required]
      });
    });
  }

  // Getter for easy access to form controls in template
  get f() {
    return this.editForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }

    // Include disabled controls like 'code' with getRawValue()
    const updatedTrip = this.editForm.getRawValue();

    this.tripDataService.updateTrip(updatedTrip).subscribe({
      next: () => {
        alert('Trip updated successfully!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Update failed:', err);
        alert('Failed to update trip.');
      }
    });
  }
}
