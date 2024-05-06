import { Injectable, inject } from '@angular/core';
import { UtilsService } from './utils.service';
import { User } from '../interfaces/user';

// firestore
import { doc, getDoc, addDoc, getFirestore, setDoc, updateDoc, collection, collectionData, query } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})

export class AuthFirebaseService {
  utilsService = inject(UtilsService);
  firestore = inject(AngularFireStorage);

  //============== AUTH userAtivo SEM Google ===============
  login(user: User) {

    // Path do user no DB
    const path = `users/${user.uid}`;

    // verificar se o user ja existe
    return this.getDocument(path)
      .then(resp => {
        if (resp) {
          console.log('existe o user no db!');
          // === atualizar que o user esta on ===
          this.updateDocument(path, {
            online: true
          }).then(() => {

            // === gravar no localStorage
            this.utilsService.saveInLocalStorage('user', user);
          })
            .catch(err => console.log('Error updateDocument: ', err))
        } else {
          console.log('nao existe o user no db!');
          // === add um ativo=true no user
          
          // === gravar o user no db
          this.setDocument(path, user)
            .then(() => {
              // add um online no resitro
              this.updateDocument(path, {
                online: true
              }).then(() => {
                  //=== gravar no localstorage
                  this.utilsService.saveInLocalStorage('user', user);
                  this.utilsService.routerLink('home');
              })
            })
            .catch(err => console.log('Error setDocument: '))
           

        }
      })
      .catch(err => { console.log('error getDocument', err) })

  }

  // statusUserAtivo(status: boolean) {
  //   const user = this.utilsService.getFromLocalStorage('user');
  //   const path = `users/${user.uid}`;
  //   if(status){
  //     this.updateDocument(path, {online: true});
  //   }else{
  //     this.updateDocument(path, {online: false});
  //   }
  // }

  // ============== BASE DE DADOS FIRESTORE userList ================
  // Lista de documentos
  async getColletionData(path: string, collectionQurey?: any) {
    const ref = collection(getFirestore(), path);
    return await collectionData(query(ref, collectionQurey));
  }
  // Busca um documento passando o uid
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }
  // Atualizar um documento passando um uid
  async updateDocument(path: string, data: any) {
    return await updateDoc(doc(getFirestore(), path), data);
  }
  // Criar um documento passando um uid
  async setDocument(path: string, data: any) {
    return await setDoc(doc(getFirestore(), path), data);
  }
  // ==== Agregar um documento ====
  addDocument(path: string = "user", data: any) {
    return addDoc(collection(getFirestore(), path), data);
  }
  
  // =============== upload de image ================
  // async uploadImage(path: string, data_url: string) {
  //   return uploadString(ref(getStorage(), path), data_url, 'data_url').then(() => {
  //     return getDownloadURL(ref(getStorage(), path))
  //   })
  // }

}