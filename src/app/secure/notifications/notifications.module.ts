import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';

import { NotificationViewComponent } from './notification-view.component';
import { NotificationAddEditComponent } from './notification-add-edit.component';


@NgModule({
  declarations: [
    NotificationViewComponent,
    NotificationAddEditComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
