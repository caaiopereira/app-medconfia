import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TourPageRoutingModule } from './tour-routing.module';
import { TourPage } from './tour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TourPage]
})
export class TourPageModule {}
