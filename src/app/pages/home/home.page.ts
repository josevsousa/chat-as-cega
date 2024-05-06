import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonAlert, IonTabButton, IonIcon,  IonInput, IonList, IonItem, IonLabel, IonNote, IonAvatar, IonChip, IonTabs, IonTabBar, IonButtons, IonBackButton, IonSpinner, IonItemSliding, IonItemOption, IonItemOptions, IonFooter, IonNavLink, IonText } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { UtilsService } from 'src/app/services/utils.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [FooterComponent, HeaderComponent, IonText, IonNote, IonNavLink, IonFooter, IonItemOptions, IonItemOption, IonItemSliding, IonSpinner, IonBackButton, IonButtons, IonChip, IonAvatar,
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
    IonTabBar ],
})
export class HomePage implements OnInit {

  utilsService = inject(UtilsService);
  authFirebaseService = inject(AuthFirebaseService);
  usersList$ = new Observable<any[]>();
  userAtivo!: User
  
  ngOnInit(){
    this.userAtivo = this.utilsService.getFromLocalStorage('user');
    this.carregarUsers();
    this.utilsService.presentToast({
      message: `Seja bem vindo! ${this.userAtivo.name}`,
      duration: 2500,
      color: 'success',
      position: 'top',
      icon: 'alert-circle-outline'
    });
  }

  carregarUsers(){
    console.log("===== Carregando users =====");
    // === carregar users do firebase
      this.authFirebaseService.getColletionData('users')
      .then(resp =>{   
          this.usersList$ = resp;
      })
      .catch(err => {console.log('erro carragarUsers: ', err)})
  } 
  
  onClick(event: any){
    console.log("aquiiiii: ", event);
  }

  // enviarAlerta() {
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

}
