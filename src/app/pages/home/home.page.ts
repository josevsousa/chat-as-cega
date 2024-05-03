import { Component, inject } from '@angular/core';
import {
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonAlert, IonTabButton, IonIcon, IonInput } from '@ionic/angular/standalone';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonInput, IonIcon, IonTabButton, 
    IonButton,
    IonInput,
    IonAlert,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  ],
})
export class HomePage {

  utilsService = inject(UtilsService);

  constructor() {
  }

  teste() {
    this.utilsService.presentAlert({
      header: 'Deletar item',
      message: ' Delete esse item',
      mode: 'ios',
      buttons: [{
        text: 'canelarr'
      },
      {
        text: 'Sim deletarr',
        handler: () => { this.del() }
      }]
    })
  }
  del() { console.log('okkkkkkk deletado') }



}
