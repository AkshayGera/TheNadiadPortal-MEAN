import { NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';
const appRoutes:Routes=[
    {path:'',redirectTo:'/main',pathMatch:'full'},
    {path:'',redirectTo:'/signup',pathMatch:'full'},
    {path:'',redirectTo:'/restaurant1',pathMatch:'full'},
    {path:'',redirectTo:'/login',pathMatch:'full'},
//    {path:'',redirectTo:'/main1',pathMatch:'full'}


]
@NgModule({
  
  imports: [
  RouterModule.forRoot(
    appRoutes,
    {enableTracing:true}

  )
  ],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
