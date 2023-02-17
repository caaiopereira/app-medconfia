import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/servico/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  public email:any;
  public senha:any;
  public nomecliente:any;
  public cpf:any;
  public rg:any;
  public data:any;
  public tipo: any;
  public genero: any;
  public endereco: any;
  public alergias: any;

  constructor(
    private authentication: AuthService,
    public Menu: MenuController,
    ){}

  ngOnInit() {
  }

  cadastrar(){ 
    this.authentication.createUser({email:this.email, password:this.senha}).then(res=>{
      if(res.user.uid){
        let data = {
          email:this.email,
          senha: this.senha,
          nomecliente: this.nomecliente,
          cpf: this.cpf,   
          rg: this.rg,   
          data: this.data,   
          tipo: this.tipo,   
          genero: this.genero,   
          endereco: this.endereco,   
          alergias: this.alergias,
          uid:res.user.uid
        }
        this.authentication.saveDetails(data).then(res=>{
          Swal.fire({
            title: 'Pronto!',
            text:   "Seu cadastro foi feito",
            icon: 'success',
            heightAuto: false

          });
          this.Menu.enable(true);
        })
      }
    },err=>{
      Swal.fire({
        title: 'Atenção!',
        text:   "Preencha todos os campos",
        icon: 'info',
        heightAuto: false
      });
    })
  }

}
