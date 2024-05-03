import { Injectable, inject } from '@angular/core';
import { UtilsService } from './utils.service';
import { User } from '../interfaces/user';

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    utilService = inject(UtilsService);

    login(user: User){
        this.utilService.saveInLocalStorage('user', user);
        this.utilService.routerLink('home');
    }

}