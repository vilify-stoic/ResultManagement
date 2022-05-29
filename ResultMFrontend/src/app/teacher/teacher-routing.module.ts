import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {TloginComponent} from './tlogin/tlogin.component';
import {OptionComponent} from './option/option.component';
import {ViewallComponent} from './viewall/viewall.component';
import {LoginfailComponent} from '../error/loginfail/loginfail.component'
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path:'teacher/login',component:TloginComponent},
  {path:'teacher/add',canActivate:[AuthGuard], component:AddComponent},
  {path:'teacher/edit/:id', canActivate:[AuthGuard],component:EditComponent},
  {path:'teacher/option', canActivate:[AuthGuard],component:OptionComponent},
  {path:'teacher/viewall', canActivate:[AuthGuard],component:ViewallComponent},
  {path:'error/loginfail', canActivate:[AuthGuard],component:LoginfailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
