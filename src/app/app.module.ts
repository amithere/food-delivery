import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SuccessComponent } from './components/success/success.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAmzI6zcCBDOqkCaRvE8cTEVOEcpcXQpR8',
  authDomain: 'food-delivery-d4951.firebaseapp.com',
  projectId: 'food-delivery-d4951',
  storageBucket: 'food-delivery-d4951.appspot.com',
  messagingSenderId: '358590099452',
  appId: '1:358590099452:web:8f3c708bc3c0ae08a94c79',
  measurementId: 'G-H85BCE2R77',
};

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    HeaderComponent,
    SuccessComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
