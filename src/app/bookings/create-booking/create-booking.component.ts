import { ModalController } from '@ionic/angular';
import { Place } from './../../places/places.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onBookPlace() {
    this.modalCtrl.dismiss({ message: 'Paste real data here' }, 'confirm');
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
