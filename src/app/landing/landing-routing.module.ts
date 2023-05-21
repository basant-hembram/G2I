import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreateCourseInfoComponent } from './create-course-info/create-course-info.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "create-course-info",
    component: CreateCourseInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
