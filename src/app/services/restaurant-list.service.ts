import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestaurantListService {
  constructor(private http: HttpClient) {}

  restaurantList() {
    return this.http.get('assets/data/restaurant-list.json');
  }

  restaurantDetail() {
    return this.http.get('assets/data/restaurant-detail.json');
  }

  addressList() {
    return this.http.get('assets/data/user-address.json');
  }
}
