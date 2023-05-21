import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesModule } from '../shared/modules/modules.module';

import { AuthRoutingModule } from './auth-routing.module';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { OtpComponent } from './otp/otp.component';

import { NgxOtpInputModule } from "ngx-otp-input";
import { QrComponent } from './qr/qr.component';

@NgModule({
  declarations: [    
  
    BankDetailsComponent, OtpComponent, QrComponent
  ],
  imports: [
    CommonModule,
    ModulesModule,
    AuthRoutingModule,
    NgxOtpInputModule
  ]
})
export class AuthModule { }
