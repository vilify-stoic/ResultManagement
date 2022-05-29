import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { LoginfailComponent } from '../error/loginfail/loginfail.component';
import {SloginComponent} from './slogin/slogin.component';
import {ViewComponent} from './view/view.component';

const routes: Routes = [ 
  {path:'student/login',component:SloginComponent},
  {path:'student/view',canActivate:[AuthGuard],component:ViewComponent},
  {path:'error/loginfail',component:LoginfailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
