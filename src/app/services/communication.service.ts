import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  cartCount$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {}

  getCartCount(): Observable<number> {
    return this.cartCount$.asObservable();
  }

  setCartCount(value: number) {
    this.cartCount$.next(value);
  }
}
