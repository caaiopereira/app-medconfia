import { Component, OnInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Clinicas } from 'src/model/clinicas.model';

import { AuthService } from 'src/servico/auth.service';
import { ClinicaService } from 'src/servico/clinica.service';


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
      await this.AuthService.logoutUser();
    }catch(error){
      console.error(error);
    }finally{
      this.Menu.enable(false);
    }
  }
  
}
