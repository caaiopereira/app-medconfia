import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarPage } from './cadastrar.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarPageRoutingModule {}
