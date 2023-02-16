import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicaUpdatePage } from './clinica-update.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicaUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicaUpdatePageRoutingModule {}
