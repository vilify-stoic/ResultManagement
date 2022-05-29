import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/services/appModels/student.model';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
 // studentView?: Student
  studentView: Student = {
    roll:0,
    name:'',
    dob:new Date,
    score:0
  };
  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.studentView = history.state;
    console.log("studentView/////////-------------------------");
    console.log(history.state);
  }

  OnBack():void{
    localStorage.removeItem('user');
    this._router.navigateByUrl('/student/login');
  }

  
}
