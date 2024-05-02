import { CanActivateFn } from '@angular/router';
import { UtilsService } from '../services/utils.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  // utilsService = inject(UtilsService);

  // xutilsService.routerLink('/auth')
  return false;
};
