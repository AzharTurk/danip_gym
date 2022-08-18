import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PublicComponent } from './layouts/public.component';
import { SecureComponent } from './layouts/secure.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './_helper/';

const PUBLIC_ROUTES:Routes=[
  {
    path:'',
    loadChildren:()=>import('./public/public-routing.module').then((x)=>x.PublicRoutingModule)
  }
]
const SECURE_ROUTES:Routes=[
  {
    path:'',
    loadChildren:()=>import('./secure/secure-routing.module').then((x)=>x.SecureRoutingModule)
  }
]
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PublicComponent,
    children: PUBLIC_ROUTES
  },
  {
    path: 'admin',
    component: SecureComponent,
    canActivate: [AuthGuard],
    children: SECURE_ROUTES
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
