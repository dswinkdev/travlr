import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTripComponent } from './add-trip';

describe('AddTrip', () => {
  let component: AddTripComponent;
  let fixture: ComponentFixture<AddTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTripComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
