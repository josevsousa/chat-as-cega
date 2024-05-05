import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import {
  LoadingController, ToastController, ToastOptions
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
  toastCtrl = inject(ToastController);

 

  // ========== Loading =========
  loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' })
  }

  // ========== Alert =========
  async presentAlert(opts?: AlertOptions) {
    const alert = await this.alertCtrl.create(opts);
    await alert.present();
  }
   // ============ Toast =============
   async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }


  // ============= Status Navegador ===================
 
  // ============= Fechar Navegador ===================
  

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
