import { Place } from './places.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private intPlaces: Place[] = [
    {
      id: 'id1',
      title: 'Fouette studio',
      description: 'First class ballet studio for kids and adults',
      category: 'Dancing',
      imageUrl:
        'https://res.cloudinary.com/for-alisia/image/upload/v1640541687/ballet/filial1_thcvfg.jpg',
    },
    {
      id: 'id2',
      title: 'London Express',
      description:
        'English language school for kids and adults for all levels, from total beginners to C1',
      category: 'Education',
      imageUrl:
        'https://res.cloudinary.com/for-alisia/image/upload/v1640542288/ballet/filial2_et1jz2.jpg',
    },
    {
      id: 'id3',
      title: 'Karma studio',
      description:
        'English language school for kids and adults for all levels, from total beginners to C1',
      category: 'Health and Welness',
      imageUrl:
        'https://res.cloudinary.com/for-alisia/image/upload/v1640542559/ballet/filial3_mto9r7.jpg',
    },
  ];

  constructor() {}

  get places() {
    return [...this.intPlaces];
  }

  getPlace(placeId: string) {
    return { ...this.intPlaces.find(({ id }) => id === placeId) };
  }
}
