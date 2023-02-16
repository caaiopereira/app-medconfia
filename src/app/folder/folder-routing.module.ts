import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'suporte',
        loadChildren: () => import('../pages/suporte/suporte.module').then( m => m.SuportePageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../pages/perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'clinica',
        loadChildren: () => import('../pages/clinica/clinica.module').then( m => m.ClinicaPageModule)
      }
    ]
  },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
