import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
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

  ngOnInit() {}
}
