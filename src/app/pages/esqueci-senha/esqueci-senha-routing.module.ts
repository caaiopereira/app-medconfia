import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsqueciSenhaPage } from './esqueci-senha.page';

const routes: Routes = [
  {
    path: '',
    component: EsqueciSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsqueciSenhaPageRoutingModule {}
