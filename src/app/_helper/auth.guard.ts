import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router:Router,
  ){}
  canActivate() {
    if (localStorage.getItem('IsLoggedIn') && localStorage.getItem('IsLoggedIn')==='true') {
        //logged in so return true
        return true;
    }
    //not logged in so redirect to login page
    this._router.navigate(['/home']);
    return false;
}

}
