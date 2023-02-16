import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilUpdatePage } from './perfil-update.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilUpdatePageRoutingModule {}
