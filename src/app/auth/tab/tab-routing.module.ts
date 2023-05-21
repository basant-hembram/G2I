import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './../tab/tab.component';
import { SignupComponent } from './../signup/signup.component';
import { LoginComponent } from './../login/login.component';

const routes: Routes = [
  {
    path: "",
    component: TabComponent,
    children: [
      {
        path: "signup",
        component: SignupComponent
      },
      {
        path: "login",
        component: LoginComponent
      }, 
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabRoutingModule { }
