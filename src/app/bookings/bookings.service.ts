import { Booking } from './bookings.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingsService {
  private ibookings: Booking[] = [
    {
      id: 'b1',
      placeId: 'pl1',
      userId: 'u1',
      placeTitle: 'First class ballet studio for kids and adults',
      guestAmount: 2,
      status: 'Active',
    },
    {
      id: 'b2',
      placeId: 'pl2',
      userId: 'u1',
      placeTitle: 'London Express',
      guestAmount: 3,
      status: 'Active',
    },
  ];

  get bookings() {
    return [...this.ibookings];
  }
}
