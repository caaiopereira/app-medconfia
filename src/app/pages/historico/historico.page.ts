import { Component, OnInit } from '@angular/core';
import { Servicos } from 'src/model/servico.model';
import { HistoricoService } from 'src/servico/historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  listaAgendamentos: Servicos [] = [];
  presentingElement = null;

  constructor(
    private Agendamentos: HistoricoService
  ) { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.Agendamentos.consultar().subscribe(results => this.listaAgendamentos = results);
  }

}
