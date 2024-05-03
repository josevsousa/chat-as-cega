import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { UtilsService } from 'src/app/services/utils.service';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bate-papo',
  templateUrl: './bate-papo.page.html',
  styleUrls: ['./bate-papo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BatePapoPage implements OnInit {

  utilsService = inject(UtilsService);
  authFirebaseService = inject(AuthFirebaseService);
  usersList$ = new Observable<any[]>();
  
  constructor() { }

  ngOnInit() {
    console.log("entreiiii no batepapo");
    this.authFirebaseService.getColletionData('users')
    .then(resp => {
      
      console.log("=====  resp do firebase: ", resp);
      this.usersList$ =  resp;
    })
    .catch(err => {console.log('erro carragarUsers: ', err)})
    .finally(()=>{
      this.usersList$.subscribe(resp => console.log("=== Reposta json do firebase :  ",resp))
    })
  }


}