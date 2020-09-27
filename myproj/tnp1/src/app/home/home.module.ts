import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { Main1Component } from './main1/main1.component';
import { SignupComponent } from './signup/signup.component';
import { Restaurant1Component } from './restaurant1/restaurant1.component';
import { MainComponent } from './main/main.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component'
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [SignupComponent, Restaurant1Component, MainComponent, ServiceComponent, LoginComponent]
})
export class HomeModule { }
