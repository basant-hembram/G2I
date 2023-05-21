import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab-routing.module';
import { ModulesModule } from '../../shared/modules/modules.module';
import { TabComponent } from './../tab/tab.component';
import { SignupComponent } from './../signup/signup.component';
import { LoginComponent } from './../login/login.component';

@NgModule({
  declarations: [
    TabComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    TabRoutingModule,
    ModulesModule
  ],
  exports: [
    SignupComponent,
    LoginComponent
  ]
})
export class TabModule { }
