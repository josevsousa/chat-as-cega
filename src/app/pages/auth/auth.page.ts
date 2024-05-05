import { Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { IonContent, IonInput, IonButton, IonTabButton, IonIcon, IonLabel, IonItem, IonText, IonCheckbox, IonRadio, IonRadioGroup, IonTabs, IonTabBar, IonNote } from '@ionic/angular/standalone';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonNote, IonText, IonItem, IonLabel, IonIcon, IonTabButton, IonButton,
    IonInput,
    IonContent,
    CommonModule, FormsModule, ReactiveFormsModule]
})
export class AuthPage {
  private formBuilderService = inject(FormBuilder);
  utilsService = inject(UtilsService);
  authFirebaseService = inject(AuthFirebaseService);

  protected form = this.formBuilderService.group({
    nome: ['', Validators.required]
  });
  photoImg: String = "../../../assets/img/n.png";
  sexo: String = 'n';

  async onSubmit() {

    const loading = await this.utilsService.loading();
    await loading.present();

    const user = {
      uid: new Date().toISOString(),
      name: String(this.form.value.nome),
      sexo: String(this.sexo),
      imgPhoto: String(this.photoImg)
    }

    // cadastrando no firebase
    await this.authFirebaseService.login(user)
      .catch (err =>
    this.utilsService.presentToast({
      message: err.message,
      duration: 1000,
      color: 'primary',
      position: 'middle',
      icon: 'alert-circle-outline'
    }))
      .finally(() => loading.dismiss())
  };

  imgSel(sexo: string) {
    if (sexo == 'f') {
      this.photoImg = "../../../assets/img/f1.png";
      this.sexo = sexo;
    } else if (sexo == 'm') {
      this.photoImg = "../../../assets/img/m1.png";
      this.sexo = sexo;
    } else {
      this.photoImg = "../../../assets/img/n.png";
      this.sexo = sexo;
    }
  }


}
