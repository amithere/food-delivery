import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantListService } from '../../../services/restaurant-list.service';
import { CartItem } from '../../models/cart-item';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css'],
})
export class RestaurantDetailComponent implements OnInit {
  private selectedRestaurantName: string | null;
  selectedRestaurantData: any;

  constructor(
    private route: ActivatedRoute,
    private service: RestaurantListService,
    private commService: CommunicationService
  ) {
    this.selectedRestaurantName =
      this.route.snapshot.paramMap.get('restaurantName');
  }

  ngOnInit(): void {
    this.service.restaurantDetail().subscribe((list: any) => {
      this.selectedRestaurantData = list.filter((obj: any) => {
        return (
          obj.restaurantName?.toLowerCase() ===
          this.selectedRestaurantName?.toLocaleLowerCase()
        );
      });
      console.log(this.selectedRestaurantData);
    });
  }

  addToCart(itemtoAdd: any): void {
    itemtoAdd.added = true;
    let existingCartItems: CartItem[] = [];
    existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    existingCartItems.push(itemtoAdd);
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
    this.commService.setCartCount(existingCartItems.length);
  }

  removeFromCart(itemToRemove: any): void {
    itemToRemove.added = false;
    let existingCartItems: CartItem[] = [];
    existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    existingCartItems = existingCartItems.filter((item: CartItem) => {
      return item.name !== itemToRemove.name;
    });
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
    this.commService.setCartCount(existingCartItems.length);
  }
}
