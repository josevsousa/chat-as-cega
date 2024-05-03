import { inject } from '@angular/core';
import { UtilsService } from '../services/utils.service';

export const authGuard = () => {
  const utilsService = inject(UtilsService);
  

  //ta logado?
  if (utilsService.getFromLocalStorage('user')) {  // substituir o false pela logica
    utilsService.routerLink('home');
    return false;
  } else {
    return true;
  }
}