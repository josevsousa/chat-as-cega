import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img-user',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img class="photo" src="{{urlPhoto}}" [ngClass]=" ativo ? 'ativo' : ''" width="50px">
  `,
  styles: `
    img.photo{
      opacity: 0.3;
    }
    .ativo{
      opacity: 1 !important;
    }   
  `,
})
export class ImgUserComponent  implements OnInit {

  @Input() urlPhoto!: String;
  @Input() online!: any;
  ativo: Boolean = false;

  ngOnInit() {
    if(this.online == 'true'){
      this.ativo = true;
    }else{
      this.ativo = false;
    }


  }


}
