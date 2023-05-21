import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BankDetailsComponent } from './bank-details/bank-details.component';
import { OtpComponent } from './otp/otp.component';
import { QrComponent } from './qr/qr.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab/tab.module').then(m => m.TabModule)
  },
  {
    path: "bank-details",
    component: BankDetailsComponent
  },
  {
    path: "otp",
    component: OtpComponent
  },
  {
    path: "qr",
    component: QrComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
