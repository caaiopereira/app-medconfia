import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsqueciSenhaPageRoutingModule } from './esqueci-senha-routing.module';

import { EsqueciSenhaPage } from './esqueci-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsqueciSenhaPageRoutingModule
  ],
  declarations: [EsqueciSenhaPage]
})
export class EsqueciSenhaPageModule {}
