import { Place } from './../places.model';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  places: Place[];

  constructor(private placesService: PlacesService) {}

  ngOnInit() {
    this.places = this.placesService.places;
  }

  onFilterUpdate(event) {
    console.log(event.detail);
  }
}
