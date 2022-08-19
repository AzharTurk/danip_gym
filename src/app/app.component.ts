import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router,NavigationEnd} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import {filter} from 'rxjs/operators'

@Component({selector: 'app-root',templateUrl: './app.component.html'})

export class AppComponent implements OnInit,OnDestroy {
  
  event$:Subscription=new Subscription();
  currentRoute:string='';

  constructor(
    private _router:Router, private translateService: TranslateService,
  ){
    this.translateService.setDefaultLang('en');
    this.translateService.addLangs(['en', 'ar']);
  }
  
  ngOnInit() {
    
    this.event$=
      this._router.events.pipe(
        filter(event => event instanceof NavigationEnd)
        )
        .subscribe((event:any) => {
            
            if(event.url=='/'){
              this.currentRoute='/';
              console.log(this.currentRoute);
            }
            else{
              this.currentRoute=event.url.split('/')[1];
              console.log(this.currentRoute);
            }
        });

  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }
}
