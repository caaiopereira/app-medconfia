import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService} from 'src/servico/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TourGuard implements CanActivate {
  
  constructor(
    private AuthService: AuthService,
    private Router: Router
  ){}

  canActivate():Promise<boolean>{
    return new Promise(resolve => {
      this.AuthService.getAuth().onAuthStateChanged(user => {
        if (user) this.Router.navigate(['home']);

        resolve(!user ? true:false);
      })
    });
  }
  
}
