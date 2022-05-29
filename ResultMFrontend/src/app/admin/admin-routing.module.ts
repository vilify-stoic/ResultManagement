import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TloginComponent} from '../teacher/tlogin/tlogin.component'
import {SloginComponent} from '../student/slogin/slogin.component'


const routes: Routes = [
  {path:'teacher/login',component:TloginComponent},
  {path:'student/login',component:SloginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
