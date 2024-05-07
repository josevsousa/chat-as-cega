import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UtilsService } from 'src/app/services/utils.service';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';


@Component({
  selector: 'app-bate-papo',
  templateUrl: './bate-papo.page.html',
  styleUrls: ['./bate-papo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BatePapoPage implements OnInit {

  route = inject(ActivatedRoute);
  utilsService = inject(UtilsService);
  firebaseService = inject(AuthFirebaseService);
  userUid!: string;
  user: any = {name: "carregando..."};

  ngOnInit() {
    this.userUid = String(this.route.snapshot.paramMap.get('uid'));
    this.buscarUser();
  }

  async buscarUser(){
    const path = `users/${this.userUid}`;
    this.user = await this.firebaseService.getDocument(path);
  }

}
