import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component'
import {TloginComponent} from './teacher/tlogin/tlogin.component'

const routes: Routes = [
   {path:'',component:HomepageComponent},
  //  {path:'teacher/login',component:TloginComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



