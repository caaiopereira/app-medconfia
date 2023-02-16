import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dias } from 'src/model/dias.model';

import { Horario } from 'src/model/horarios.model';
import { ClinicaService } from 'src/servico/clinica.service';
import { DiasService } from 'src/servico/dias.service';

import { HorariosService } from 'src/servico/horarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clinica-update',
  templateUrl: './clinica-update.page.html',
  styleUrls: ['./clinica-update.page.scss'],
})
export class ClinicaUpdatePage implements OnInit {

  image = "https://cdn-icons-png.flaticon.com/512/2222/2222671.png";
  routeId= null;
  clinicas: any = {};
  listaDias: Dias[] =[];
  listaHorarios: Horario [] = [];
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private ClinicaBase: ClinicaService,
    private Horarios: HorariosService,
    private Dias: DiasService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.routeId = this.activatedRoute.snapshot.params['id'];

    if(this.routeId){
      this.ClinicaBase.consultaone(this.routeId).subscribe(results => {this.clinicas = results});
      this.Horarios.consultar().subscribe(results => this.listaHorarios = results);
      this.Dias.consultar().subscribe(results => this.listaDias = results);
    }
  }
  
  update(form:any){
    try{
    this.ClinicaBase.editar(this.routeId, form.value, ); 
    }finally{
      Swal.fire({
        title: 'Pronto!',
        text:   "Clínica atualizada",
        icon: 'success',
        heightAuto: false
    })
    this.router.navigate(['clinica']);
    }
  }
}
