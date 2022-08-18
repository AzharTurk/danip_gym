import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseViewComponent } from './courses/course-view.component';

import { DashComponent } from './dash.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';


const NOTIFICATIONS_ROUTES:Routes=[
  {
    path:'',
    loadChildren:()=>import('./notifications/notifications-routing.module').then((x)=>x.NotificationsRoutingModule)
  }
]

const routes: Routes = [
  {
    path:'',
    redirectTo:'dash',
    pathMatch:'full'
  },
  {
    path:'',
    component:DashComponent
  },
  {
    path:'course',
    component:CourseViewComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'table',
    component:TableComponent
  },
  {
    path:'notification',
    children:NOTIFICATIONS_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
