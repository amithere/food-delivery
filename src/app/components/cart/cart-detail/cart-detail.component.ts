import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { RestaurantListService } from 'src/app/services/restaurant-list.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css'],
})
export class CartDetailComponent implements OnInit {
  cartItems: CartItem[] = [];
  userAddressList: any = [];

  constructor(
    private service: RestaurantListService,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.authService.getLoggedIn().subscribe((loggedIn: boolean) => {
      if (!loggedIn) {
        this.router.navigate(['login']);
      }
    });
  }

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}');
    this.cartItems.map((item) => {
      item.quantity = 1;
    });
    this.getAddressList();
  }

  updateQuantity(type: string, selectedItems: CartItem): void {
    this.cartItems.map((item: CartItem) => {
      if (type === 'ADD') {
        if (item.name === selectedItems.name) {
          if (item.hasOwnProperty('quantity')) {
            item.quantity += 1;
          } else {
            item.quantity = 1;
          }
        }
      } else if (type === 'REMOVE') {
        if (item.name === selectedItems.name) {
          if (item.hasOwnProperty('quantity')) {
            item.quantity -= 1;
          } else {
            item.quantity = 1;
          }
        }
      }
    });
  }

  selectAddress(ind: number): void {
    this.userAddressList.map((address: any, index: number) => {
      if (ind == index) {
        address.selected = true;
      } else {
        address.selected = false;
      }
    });
  }

  getAddressList(): void {
    this.service.addressList().subscribe((list: any) => {
      this.userAddressList = list;
    });
  }

  calculateBill(): void {}
}
