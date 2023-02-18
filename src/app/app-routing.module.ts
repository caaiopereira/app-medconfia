import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { TourGuard } from './guards/tour.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tour',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'suporte',
    loadChildren: () => import('./pages/suporte/suporte.module').then( m => m.SuportePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'clinica',
    loadChildren: () => import('./pages/clinica/clinica.module').then( m => m.ClinicaPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'historico',
    loadChildren: () => import('./pages/historico/historico.module').then( m => m.HistoricoPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'tour',
    loadChildren: () => import('./pages/tour/tour.module').then( m => m.TourPageModule), canActivate: [TourGuard]
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./pages/cadastrar/cadastrar.module').then( m => m.CadastrarPageModule), canActivate: [TourGuard]
  },
  {
    path: 'agendamento',
    loadChildren: () => import('./pages/agendamento/agendamento.module').then( m => m.AgendamentoPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'clinica-update/:id',
    loadChildren: () => import('./pages/clinica-update/clinica-update.module').then( m => m.ClinicaUpdatePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'cadastro-clinica',
    loadChildren: () => import('./pages/cadastro-clinica/cadastro-clinica.module').then( m => m.CadastroClinicaPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'perfil-update/:id',
    loadChildren: () => import('./pages/perfil-update/perfil-update.module').then( m => m.PerfilUpdatePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'esqueci-senha',
    loadChildren: () => import('./pages/esqueci-senha/esqueci-senha.module').then( m => m.EsqueciSenhaPageModule), canActivate: [TourGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
