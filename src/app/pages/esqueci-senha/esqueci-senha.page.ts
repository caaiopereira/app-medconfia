import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/servico/auth.service';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.page.html',
  styleUrls: ['./esqueci-senha.page.scss'],
})
export class EsqueciSenhaPage implements OnInit {

  
  constructor(
    private authentication: AuthService,
  ) { }

  ngOnInit() {
  }

  recoverPassword(form: any){
    this.authentication.resetPassword(form.value.email);
  }
  
}

      