import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MenuController } from '@ionic/angular';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static logoutUser() {
    throw new Error('Method not implemented.');
  }
  //Obtem informações do usuario
  logout //Obtem informações do usuario
    () {
    throw new Error('Method not implemented.');
  }
  itemCollection: any;
  auth: any;

  constructor(
    public angularAuth: AngularFireAuth,
    public firestore: AngularFirestore,
    public Menu: MenuController
  ) { }

    loginUser(user){
    return this.angularAuth.signInWithEmailAndPassword(user.email, user.password);
    
    }

    //create user
    createUser(user){
      return this.angularAuth.createUserWithEmailAndPassword(user.email, user.password);
    }

    deleteUser(uid){  
    return this.angularAuth.currentUser.then(user => user?.delete());
    }

    saveDetails(data) {
      return this.firestore.collection("clientes").doc(data.uid).set(data);
    }

    //logout do usuario
    logoutUser(){
      return this.angularAuth.signOut();
    }

    getDetails(data) {
      return this.firestore.collection("clientes").doc(data.uid).valueChanges();
    }

    //Obtem informações do usuario
    getAuth(){
      return this.angularAuth;
    }


    resetPassword(email){
      
      return this.angularAuth.sendPasswordResetEmail(email)
    }
}
