import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clinicas } from 'src/model/clinicas.model';

import { Dias } from 'src/model/dias.model';
import { Especialidade } from 'src/model/especialidades.model';
import { Horario } from 'src/model/horarios.model';

import { ClinicaService } from 'src/servico/clinica.service';
import { DiasService } from 'src/servico/dias.service';
import { EspecialidadesService } from 'src/servico/especialidades.service';

import { HistoricoService } from 'src/servico/historico.service';
import { HorariosService } from 'src/servico/horarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {

  public nomecliente:any;
  public cpf:any;
  public data:any;
  public horario: any;
  public genero: any;
  public nomeclinica: any;
  public especialidade: any;

  presentingElement: any;
  listaClinicas: Clinicas[] = [];
  listaEspecialidades: Especialidade[] = [];
  listaHorarios: Horario[] = [];
  listaDias: Dias[] = [];

  constructor(
    private ClinicaBase: ClinicaService,
    private Especialidades: EspecialidadesService,
    private Horarios: HorariosService,
    private Historico: HistoricoService,
    private Dias: DiasService,
    public router: Router
  ) { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.ClinicaBase.consultar().subscribe(results => this.listaClinicas = results);
    this.Especialidades.consultar().subscribe(results => this.listaEspecialidades = results);
    this.Horarios.consultar().subscribe(results => this.listaHorarios = results);
    this.Dias.consultar().subscribe(results => this.listaDias = results);
  }

  agendamento(){
    try{this.Historico.agendar({nomecliente: this.nomecliente, cpf: this.cpf, horario: this.horario, data: this.data, genero: this.genero, nomeclinica: this.nomeclinica, especialidade: this.especialidade}).then(res => {
      if(res.collection.toString){
      let agendamentos = {
        nomecliente: this.nomecliente,
        cpf: this.cpf,
        data: this.data,
        horario: this.horario,
        genero: this.genero,
        nomeclinica: this.nomeclinica,
        especialidade: this.especialidade,
      }
      Swal.fire({
        title: 'Pronto!',
        text:   "Agendamento feito",
        icon: 'success',
        heightAuto: false
      });
      this.router.navigateByUrl('home');
    }})
    }catch{
      Swal.fire({
        title: 'Atenção!',
        text:   "Preencha todos os campos",
        icon: 'info',
        heightAuto: false
      });
    }
  }
}
