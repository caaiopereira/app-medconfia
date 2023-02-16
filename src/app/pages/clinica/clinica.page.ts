import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ClinicaService } from 'src/servico/clinica.service';

import { Clinicas } from 'src/model/clinicas.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.page.html',
  styleUrls: ['./clinica.page.scss'],
})
export class ClinicaPage implements OnInit {

  listaClinicas: Clinicas [] = [];
  component = ClinicaPage;
  canDismiss = false;
  presentingElement = null;
  isModalOpen = false;
  roleMessage: string;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.ClinicaBase.consultar().subscribe(results => this.listaClinicas = results);
  }

  constructor(
    private alertCtrl: AlertController,
    private ClinicaBase: ClinicaService
  ){}

 
async deletar(id: string) {
    const alerte = this.alertCtrl.create({
      mode: 'md',
      header: 'Deseja excluir?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          
        },
        {
          text: 'Confirmar',
          handler: ()  =>{
            try{
              this.ClinicaBase.deletar(id);              
            }finally{
              Swal.fire({
                title: 'Excluído!',
                text:   "Clinica Excluída",
                icon: 'error',
                heightAuto: false
              });
            }
          },
        }
      ]
});
(await alerte).present();
}


}
