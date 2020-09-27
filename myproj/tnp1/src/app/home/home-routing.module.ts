import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MainComponent } from './main/main.component';
import {SignupComponent} from './signup/signup.component';
import{Restaurant1Component} from'./restaurant1/restaurant1.component';
import {MainComponent} from './main/main.component'
import {ServiceComponent} from './service/service.component';
import {LoginComponent} from './login/login.component';
//import {Main1Component} from './main1/main1.component'
import{RouterModule,Routes} from '@angular/router';
const secondaryRoutes:Routes =[
  //{path:"main",component:MainComponent},

//  {path:"main1",component:Main1Component}
  {path:"signup",component:SignupComponent},
  {path:"main",component:MainComponent},
  {path:"restaurant1",component:Restaurant1Component},
  {path:"service",component:ServiceComponent},
  {path:"login",component:LoginComponent}
  

];

@NgModule({
  imports: [
    RouterModule.forChild(secondaryRoutes)
  ],
  exports:[RouterModule]

})
export class HomeRoutingModule { }
