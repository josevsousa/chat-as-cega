import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonAlert, 
  IonTabButton, 
  IonIcon, 
  IonInput,
  IonList,
  IonItem, 
  IonLabel, IonNote, IonAvatar, IonChip, IonTabs, IonTabBar, IonButtons, IonBackButton, IonSpinner, IonItemSliding, IonItemOption, IonItemOptions, IonFooter, IonNavLink, IonText } from '@ionic/angular/standalone';
import { Observable, map } from 'rxjs';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonText, IonNote, IonNavLink, IonFooter, IonItemOptions, IonItemOption, IonItemSliding, IonSpinner, IonBackButton, IonButtons, IonChip, IonAvatar,
    CommonModule,
    IonInput, 
    IonIcon, 
    IonTabButton, 
    IonButton,
    IonInput,
    IonAlert,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonLabel,
    IonItem,
    IonTabs,
    IonTabBar
  ],
})
export class HomePage implements OnInit {

  utilsService = inject(UtilsService);
  authFirebaseService = inject(AuthFirebaseService);
  usersList$ = new Observable<any[]>();

  router = inject(Router);

  userAtivo!: User;
  loading = false;

  ngOnInit(){
    this.userAtivo = this.utilsService.getFromLocalStorage('user');
    this.carregarUsers();
    this.utilsService.presentToast({
      message: `Seja bem vindo! ${this.userAtivo.name}`,
      duration: 2500,
      color: 'primary',
      position: 'top',
      icon: 'alert-circle-outline'
    });

    

  }


  carregarUsers(){
    console.log("===== Carregando users =====");
    // === carrega todos os users
      this.authFirebaseService.getColletionData('users')
      .then(resp =>{
        
        console.log("=====  resp do firebase: ", resp);
        //  this.usersList$ = resp;
          this.usersList$ = resp;
         
      })
      .catch(err => {console.log('erro carragarUsers: ', err)})
  } 
  
  onClick(event: any){
    console.log("aquiiiii: ", event);
  }

  

  // teste() {
  //   this.utilsService.presentAlert({
  //     header: 'Deletar item',
  //     message: ' Delete esse item',
  //     mode: 'ios',
  //     buttons: [{
  //       text: 'canelarr'
  //     },
  //     {
  //       text: 'Sim deletarr',
  //       handler: () => { this.del() }
  //     }]
  //   })
  // }
  // del() { console.log('okkkkkkk deletado') }

  ngOnChanges(){
    this.utilsService.presentToast({
      message: `teste`,
      duration: 2500,
      color: 'primary',
      position: 'top',
      icon: 'alert-circle-outline'
    })
  }


  teste(){
    this.authFirebaseService.statusUserAtivo(false);
  }

}
