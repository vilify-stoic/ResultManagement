import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule}  from '@angular/forms'

import { TeacherRoutingModule } from './teacher-routing.module';
import { TloginComponent } from './tlogin/tlogin.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { OptionComponent } from './option/option.component';
import { ViewallComponent } from './viewall/viewall.component';


@NgModule({
  declarations: [
    TloginComponent,
    AddComponent,
    EditComponent,
    OptionComponent,
    ViewallComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule
  ]
})
export class TeacherModule { }
