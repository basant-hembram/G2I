import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateCourseInfoComponent } from './create-course-info/create-course-info.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreateCourseInfoComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
