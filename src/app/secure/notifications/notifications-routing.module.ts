import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotificationAddEditComponent } from './notification-add-edit.component';
import { NotificationViewComponent } from './notification-view.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'view',
    pathMatch:'full',
  },
  {
    path:'view',
    component:NotificationViewComponent
  },
  {
    path:'add',
    component:NotificationAddEditComponent
  },
  {
    path:'edit/:notifId',
    component:NotificationAddEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
