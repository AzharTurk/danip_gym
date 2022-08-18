import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';

import { DashComponent } from './dash.component';
import { CoursesModule } from "./courses/courses.module";
import { NotificationsModule } from "./notifications/notifications.module";
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    DashComponent,
    FormComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    SecureRoutingModule,
    CoursesModule,
    NotificationsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    NgChartsModule


  ],
})
export class SecureModule { }
