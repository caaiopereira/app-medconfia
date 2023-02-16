import { Component, OnInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Clinicas } from 'src/model/clinicas.model';

import { AuthService } from 'src/servico/auth.service';
import { ClinicaService } from 'src/servico/clinica.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  listaClinicas: Clinicas[] = [];
 
  constructor(
    private ClinicaBase: ClinicaService,
    private AuthService: AuthService,
    public Menu: MenuController,
  ) { }

  ngOnInit() {
    this.ClinicaBase.consultar().subscribe(results => this.listaClinicas = results);
  }
  ionViewWillLeave(){
    this.Menu.enable(true);
  }

  async logout(){
    try{
      Swal.fire({
        title: 'Atenção!',
        text: "Tem certeza que deseja fazer o Logout?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        heightAuto: false
      }).then(async (result) => {
        if (result.isConfirmed) {
          this.Menu.enable(false);
          await this.AuthService.logoutUser();
        }
      })  
    }catch(error){
      console.error(error);
    }
  }
}
