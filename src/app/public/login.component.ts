import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './_services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']


})
export class LoginComponent implements OnInit {
  token: string|undefined;
  LoginForm!: FormGroup;

  constructor(
    private _formBuilder:FormBuilder,
    private _router:Router,
    private _authenticationService:AuthenticationService
  ) { this.token = undefined;}

  ngOnInit(): void {
    localStorage.removeItem('IsLoggedIn');
    this.generateForm();
  }

  generateForm(){
    this.LoginForm=this._formBuilder.group({
      uName:[''],
      pWord:[''],
    });
  }

  login(){
    if (this.LoginForm.invalid) {
      for (const control of Object.keys(this.LoginForm.controls)) {
        this.LoginForm.controls[control].markAsTouched();
      }
      return;
    }
    console.debug(`Token [${this.token}] generated`);
    if(this._authenticationService.tryLogin(this.LoginForm.value.uName,this.LoginForm.value.pWord)){
      this._router.navigate(['/admin']);
    }
    else{
      alert('Invalid Username and Password...');
    }
  }


}
