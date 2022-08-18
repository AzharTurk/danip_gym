import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';

import { CourseViewComponent } from './course-view.component';


@NgModule({
  declarations: [
    CourseViewComponent,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
