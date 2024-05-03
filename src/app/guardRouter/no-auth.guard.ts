import { inject } from "@angular/core";
import { UtilsService } from "../services/utils.service";

export const noAuthGuard = () => {
  const utilService = inject(UtilsService);

  //esta logado?
  if (utilService.getFromLocalStorage('user')) {
    return true;
  } else {
    utilService.routerLink('auth');
    return false;
  }
}