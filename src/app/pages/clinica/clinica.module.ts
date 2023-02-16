import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicaPageRoutingModule } from './clinica-routing.module';

import { ClinicaPage } from './clinica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicaPageRoutingModule
  ],
  declarations: [ClinicaPage]
})
export class ClinicaPageModule {}
