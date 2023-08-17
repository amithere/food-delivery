/**
 * @author Amit Singh
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { RestaurantListService } from 'src/app/services/restaurant-list.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {
  restaurantList: any;

  constructor(
    private service: RestaurantListService,
    private router: Router,
    private authService: AuthenticationService,
    private commService: CommunicationService
  ) {
    this.authService.getLoggedIn().subscribe((loggedIn: boolean) => {
      if (!loggedIn) {
        this.router.navigate(['login']);
      }
    });
  }

  ngOnInit(): void {
    this.service.restaurantList().subscribe((response) => {
      if (response) {
        this.restaurantList = response;
      }
    });

    const count = JSON.parse(localStorage.getItem('cartItems') || '[]').length;
    this.commService.setCartCount(count);
  }

  selectRestaurant(selectedRestaurant: any) {}
}
