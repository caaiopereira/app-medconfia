import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilUpdatePageRoutingModule } from './perfil-update-routing.module';

import { PerfilUpdatePage } from './perfil-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilUpdatePageRoutingModule
  ],
  declarations: [PerfilUpdatePage]
})
export class PerfilUpdatePageModule {}
