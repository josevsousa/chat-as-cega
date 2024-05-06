import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bate-papo',
  templateUrl: './bate-papo.page.html',
  styleUrls: ['./bate-papo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BatePapoPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("entrei no bate papo")
  }

}
