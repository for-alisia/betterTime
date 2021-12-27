import { PlacesService } from './../../places.service';
import { NavController } from '@ionic/angular';
import { Place } from './../../places.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  place: Place;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('offerId')) {
        this.navCtrl.navigateBack('places/offers');

        return;
      }

      this.place = this.placesService.getPlace(paramMap.get('offerId'));
    });
  }
}
