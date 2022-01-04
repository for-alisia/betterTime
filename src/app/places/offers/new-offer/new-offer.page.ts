import * as moment from 'moment';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  // Implement it with moment.js
  todayDate: Date = new Date();

  orgForm = this.fb.group({
    title: [
      '',
      Validators.compose([Validators.required, Validators.minLength(6)]),
    ],
    description: [
      '',
      Validators.compose([Validators.required, Validators.minLength(20)]),
    ],
    price: ['', Validators.compose([Validators.required])],
  });

  constructor(private fb: FormBuilder) {}

  get startDate(): string {
    return moment(this.todayDate).format('YYYY-MM-DD');
  }

  get endDate(): string {
    return moment(this.todayDate).add(3, 'y').format('YYYY-MM-DD');
  }

  ngOnInit() {}

  onCreateOffer() {}
}
