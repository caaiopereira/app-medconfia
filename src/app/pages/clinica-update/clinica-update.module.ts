import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicaUpdatePageRoutingModule } from './clinica-update-routing.module';

import { ClinicaUpdatePage } from './clinica-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicaUpdatePageRoutingModule
  ],
  declarations: [ClinicaUpdatePage]
})
export class ClinicaUpdatePageModule {}
