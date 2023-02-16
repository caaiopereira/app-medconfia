import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clientes } from 'src/model/clientes.model';

import { FirebaseService } from 'src/servico/firebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-update',
  templateUrl: './perfil-update.page.html',
  styleUrls: ['./perfil-update.page.scss'],
})
export class PerfilUpdatePage implements OnInit {

  routeId = null;
  clientes: any = {};
  listaClientes: Clientes [] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private ClientesBase: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.routeId = this.activatedRoute.snapshot.params['id'];
    this.ClientesBase.consultaone(this.routeId).subscribe(results => {this.clientes = results});
    this.ClientesBase.consultar().subscribe(results => this.listaClientes = results);
  }

  update(form: any){
    try{
      this.ClientesBase.editar(this.routeId, form.value);
    }finally{
      Swal.fire({
        title: 'Pronto!',
        text:   "Seu perfil foi atualizado",
        icon: 'success',
        heightAuto: false
      });
      this.router.navigateByUrl('perfil');
    }

  }


}
