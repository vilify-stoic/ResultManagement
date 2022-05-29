import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ViewComponent } from './view/view.component';
import { SloginComponent } from './slogin/slogin.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewComponent,
    SloginComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule
  ]
})
export class StudentModule { }
