import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  itemCollection: AngularFirestoreCollection;

  
  
  constructor(private af: AngularFirestore ) {
    this.itemCollection = af.collection("agendamentos");

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

  mostrar(): any{
    return this.itemCollection.doc().valueChanges();
  }

  //buscar somente um poduto
  consultaone(id: string){
    return this.itemCollection.doc(id).valueChanges();
  }

  agendar(servico: any){
    return this.itemCollection.add(servico);
  }

  deletar(id: string){
    return this.itemCollection.doc(id).delete();
  }

  editar(id: string, item: any){
    return this.itemCollection.doc(id).update(item);
  }
}
function servico(servico: any) {
  throw new Error('Function not implemented.');
}

