import { IonItemSliding } from '@ionic/angular';
import { Booking } from './bookings.model';
import { BookingsService } from './bookings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  bookings: Booking[];

  constructor(private bookingsService: BookingsService) {}

  ngOnInit() {
    this.bookings = this.bookingsService.bookings;
  }

  onCancel(id: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log(id);
  }
}
