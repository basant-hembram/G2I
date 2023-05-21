import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChooseComponent } from "./choose/choose.component"
import { MainLayoutComponent } from "./shared/app-layout/main-layout/main-layout.component";
import { AuthLayoutComponent } from "./shared/app-layout/auth-layout/auth-layout.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: "choose",
    component: ChooseComponent,
  },
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
      },
      {
        path: 'teacher',
        loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule)
      },
      {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
      },
      {
        path: 'parent',
        loadChildren: () => import('./parent/parent.module').then(m => m.ParentModule)
      }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
