import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { AuthService } from 'src/servico/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.page.html',
  styleUrls: ['./esqueci-senha.page.scss'],
})
export class EsqueciSenhaPage implements OnInit {

  
  constructor(
    private authentication: AuthService,
    private alertController: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async recoverPassword(form: any) {
    try {
      await this.authentication.resetPassword(form.value.email);
      await this.alertController.create({
      });
      Swal.fire({
        title: 'Pronto!',
        text: 'Um email foi enviado para redefinir a senha.',
        icon: 'success',
        heightAuto: false
      });
      this.router.navigate(['tour']);
    } catch (error) {
      let message = '';
      if (error.code === 'auth/missing-email') {
        message = 'Preencha o campo corretamente  ';
      } else {
        message = 'Email inválido ou não cadastrado.';
      }
      Swal.fire({
        title: 'Oops!',
        text: message,
        icon: 'error',
        heightAuto: false
      });
    }
  }


}

      