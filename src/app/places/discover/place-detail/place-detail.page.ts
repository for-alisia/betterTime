import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking.component';
import { Place } from './../../places.model';
import { PlacesService } from './../../places.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  ActionSheetController,
  ModalController,
  NavController,
} from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/discover');

        return;
      }

      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  async openBookingModal(mode: 'select' | 'random') {
    const modalEl = await this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: {
        selectedPlace: this.place,
      },
    });
    modalEl.present();

    const resultData = await modalEl.onDidDismiss();

    if (resultData.role === 'confirm') {
      console.log('Booked!');
    }
  }

  async onBookPlace() {
    // this.navCtrl.navigateBack('/places/discover');
    const actionSheetEl = await this.actionSheetCtrl.create({
      header: 'Choose an action',
      buttons: [
        {
          text: 'Select Date',
          handler: () => {
            this.openBookingModal('select');
          },
        },
        {
          text: 'Random Date',
          handler: () => {
            this.openBookingModal('random');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

    actionSheetEl.present();
  }
}
