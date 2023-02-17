import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { IonModal, MenuController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AuthService } from 'src/servico/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.page.html',
  styleUrls: ['./tour.page.scss'],
})
export class TourPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  public email:any;
  public password:any;
  
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
  
  //tipar os dados do form
  form: FormGroup

  constructor(
    public router: Router,
    private authencation: AuthService,
    public Menu: MenuController
    ) { }
    
    ionViewDidEnter(){
      this.Menu.enable(false);
    }

  ngOnInit() {
    //executa o metodo na inicialização da page log
    this.authencation.getAuth().user.subscribe(results => {
      localStorage.setItem('userId', results.uid );
    });
  }

slideOpts = {
  initialSlide: 0,
  speed: 400
}


login(){
  this.authencation.loginUser({email:this.email,password:this.password})
  .then(res=>{
    console.log(res);
    if(res.user.uid){
      this.authencation.getDetails({uid:res.user.uid}).subscribe(res=>{
        this.email = "";
        this.password = "";
        this.router.navigateByUrl('home');
        this.cancel()
        this.Menu.enable(true);
      });
    }
  },err=>{
    Swal.fire({
      title: 'Error!',
      text:   "Email ou Senha inválidos",
      icon: 'error',
      heightAuto: false
    });
  })
}

cadastrar(){
  this.router.navigateByUrl('cadastrar');
}

 esqueci_senha(){
  this.router.navigateByUrl('esqueci-senha');
 }


}
