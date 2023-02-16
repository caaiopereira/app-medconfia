import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroClinicaPage } from './cadastro-clinica.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroClinicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroClinicaPageRoutingModule {}
