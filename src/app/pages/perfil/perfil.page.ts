import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/servico/firebase.service';
import { Clientes } from 'src/model/clientes.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  isModalOpen = false;
  component = PerfilPage;
  presentingElement = null;
  listaClientes: Clientes[] = [];

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(
    private ClientesBase: FirebaseService,
    ) { }

    ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.ClientesBase.consultar().subscribe( results => this.listaClientes = results);
    }

}
