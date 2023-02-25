import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/servico/firebase.service';
import { Clientes } from 'src/model/clientes.model';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/servico/auth.service';

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
    public router: Router,
    public Menu: MenuController,
    private AuthService: AuthService
    ) { }

    ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.ClientesBase.consultar().subscribe( results => this.listaClientes = results);
    }

    async deletar(uid:string){
              try{
                Swal.fire({
                  title: 'Atenção!',
                  text: "Tem certeza que deseja fazer a exclusão do seu perfil? Será redicionado para a página inicial!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Sim',
                  heightAuto: false
                }).then(async (result) => {
                  if (result.isConfirmed) {
                    this.Menu.enable(false);
                    this.AuthService.deleteUser(uid);
                    this.ClientesBase.deletar(uid);
                    await this.AuthService.logoutUser();
                  }
                }); 
              }catch(error){
                console.error(error);
              }                  
            }
}
