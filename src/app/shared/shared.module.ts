import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModulesModule } from './modules/modules.module';
import { MainLayoutComponent } from './app-layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './app-layout/auth-layout/auth-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseStepLayoutComponent } from './app-layout/course-step-layout/course-step-layout.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    AuthLayoutComponent,
    HeaderComponent,
    FooterComponent,
    CourseStepLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModulesModule
  ],
  exports: [
    ModulesModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
