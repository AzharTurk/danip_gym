import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { DOCUMENT } from "@angular/common";
import { Inject } from "@angular/core";

@Component({selector: 'app-header',templateUrl: './header.component.html',styleUrls:['./header.component.scss']})
export class HeaderComponent implements OnInit {

  constructor(
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.addLangs(['en', 'ar']);
  }
 
  ngOnInit(): void {

  }
  changeLangage(lang: string) {
    let htmlTag = this.document.getElementsByTagName(
      "html"
    )[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.changeCssFile(lang);
  }

  changeCssFile(lang: string) {
    
    let headTag = this.document.getElementsByTagName(
      "head"
    )[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById(
      "langCss"
    ) as HTMLLinkElement;

    let bundleName = (lang === "ar" ? "src/app/themes/ar_css/AdminLTE.min.css" : "src/app/themes/en_css/AdminLTE.min.css");

    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      let newLink = this.document.createElement("link");
      newLink.rel = "stylesheet";
      newLink.type = "text/css";
      newLink.id = "langCss";
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }
}
