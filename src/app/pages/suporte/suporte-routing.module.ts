import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuportePage } from './suporte.page';

const routes: Routes = [
  {
    path: '',
    component: SuportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuportePageRoutingModule {}
