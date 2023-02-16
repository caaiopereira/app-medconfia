import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicaPage } from './clinica.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicaPageRoutingModule {}
