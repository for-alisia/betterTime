import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../places.model';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent implements OnInit {
  @Input() offer: Place;

  constructor() {}

  ngOnInit() {}
}
