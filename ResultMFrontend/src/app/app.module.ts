import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {TeacherModule} from './teacher/teacher.module';
import {StudentModule} from './student/student.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeacherService } from './services/teacher.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginfailComponent } from './error/loginfail/loginfail.component';
import { TloginComponent } from './teacher/tlogin/tlogin.component';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    LoginfailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeacherModule,
    StudentModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TeacherService,AuthGuard,TloginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
