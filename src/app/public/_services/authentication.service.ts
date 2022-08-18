import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  tryLogin(uName:string,pWord:string):boolean{

    localStorage.removeItem('IsLoggedIn');

    if(uName==='test@gmail.com'&&pWord==='123456'){
      localStorage.setItem('IsLoggedIn','true');
      return true;
    }
    else{

      return false;
    }

  }

}
