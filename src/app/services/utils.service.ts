import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import {
  LoadingController
} from '@ionic/angular'
import {
  AlertController,
  AlertOptions
} from '@ionic/angular/standalone'

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  router = inject(Router);
  loadingCtrl = inject(LoadingController);
  alertCtrl = inject(AlertController);


 

  // ========== Loading =========
  loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' })
  }

  // ========== Alert =========
  async presentAlert(opts?: AlertOptions) {
    const alert = await this.alertCtrl.create(opts);
    await alert.present();
  }



   // ============ Evia a qualquer pagina disponivel =============
   routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }

  // ============ Guarda um elemento no localstore  =============
  async saveInLocalStorage(key: string, value: User) {
    return await localStorage.setItem(key, JSON.stringify(value));
  }

  // ============ Obtem um elemento no localstore  =============
  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key)!);
  }
  // ============ Deleta um elemento no localstore  =============
  delFromLocalStorage(key: string) {
    return localStorage.removeItem(key);
  }



}
