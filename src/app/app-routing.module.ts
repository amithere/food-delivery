import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDetailModule } from './components/restaurant-detail/restaurant-detail.module';
import { CartModule } from './components/cart/cart.module';
import { SuccessComponent } from './components/success/success.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantListComponent,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/signin/signin.module').then((m) => m.SigninModule),
  },
  {
    path: 'restaurant-detail/:restaurantName',
    loadChildren: () =>
      import('./components/restaurant-detail/restaurant-detail.module').then(
        (m) => m.RestaurantDetailModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./components/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'order-success',
    component: SuccessComponent,
  },
  {
    path: 'manage-address',
    loadChildren: () =>
      import('./components/manage-address/manage-address.module').then(
        (m) => m.ManageAddressModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
