import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CadastroClinicaPageRoutingModule } from './cadastro-clinica-routing.module';
import { CadastroClinicaPage } from './cadastro-clinica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroClinicaPageRoutingModule
  ],
  declarations: [CadastroClinicaPage]
})
export class CadastroClinicaPageModule {}
