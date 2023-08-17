import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAddressComponent } from './manage-address.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ManageAddressComponent,
  },
];

@NgModule({
  declarations: [ManageAddressComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ManageAddressModule {}
