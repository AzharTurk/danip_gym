import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from '../../environments/environment';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login.component';
import { AuthenticationService } from "./_services";




@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicRoutingModule,
    RecaptchaFormsModule,
    RecaptchaModule,
  ],
  providers:[
    AuthenticationService,

  ]

})
export class PublicModule { }
