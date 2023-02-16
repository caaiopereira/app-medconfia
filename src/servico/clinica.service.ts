import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {
  
  itemCollection: AngularFirestoreCollection;
  
  
  constructor(private af: AngularFirestore ) {
    this.itemCollection = af.collection("clinica");

  }

  //busca todos os produtos
  consultar():any{
    return this.itemCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id,...data}
        })
      })
    );
  }

  //buscar somente um poduto
  consultaone(id: string){
    return this.itemCollection.doc(id).valueChanges();
  }

  cadastrar(clinica: any){
    return this.itemCollection.add(clinica);
  }

  deletar(id: string){
    return this.itemCollection.doc(id).delete();
  }

  editar(id: string, clinica: any){
    return this.itemCollection.doc(id).update(clinica);
  }
}
