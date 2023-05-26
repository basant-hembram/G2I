import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateCourseInfoComponent } from './create-course-info/create-course-info.component';
import { CourseStepComponent } from './course-step/course-step.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreateCourseInfoComponent,
    CourseStepComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
