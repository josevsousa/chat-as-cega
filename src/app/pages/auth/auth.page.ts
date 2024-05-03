import { Component ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonInput, IonButton, IonTabButton, IonIcon, IonLabel, IonItem, IonText, IonCheckbox, IonRadio, IonRadioGroup } from '@ionic/angular/standalone';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonRadioGroup, IonRadio, IonCheckbox, IonText, IonItem, IonLabel, IonIcon, IonTabButton, IonButton, 
    IonInput, 
    IonContent,
    CommonModule, FormsModule, ReactiveFormsModule ]
})
export class AuthPage {
  private formBuilderService = inject(FormBuilder);   
  utilsService = inject(UtilsService); 
  authService = inject(AuthService);
  
  protected form = this.formBuilderService.group({
    nome: ['', Validators.required]
  });
  photoImg: String = "../../../assets/img/n.png";
  sexo: String = 'n';

 onSubmit(){
  const user = { 
    uid: new Date().toISOString(),
    name: String(this.form.value.nome),
    sexo: String(this.sexo), 
    imgPhoto: String(this.photoImg) 
   }  
   this.authService.login(user); 
  };
  
  imgSel(sexo: string){
    if(sexo == 'f'){
      this.photoImg = "../../../assets/img/f1.png";
      this.sexo = sexo;
    }else if(sexo =='m'){
      this.photoImg = "../../../assets/img/m1.png";
      this.sexo = sexo;
    }else{
      this.photoImg = "../../../assets/img/n.png";
      this.sexo = sexo;
    }
  }


}
