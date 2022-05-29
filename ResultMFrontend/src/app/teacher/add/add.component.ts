import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import {Student} from '../../services/appModels/student.model'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  student: Student = {
    roll: null as any,
    name: null as any,
    dob: null as any,
    score: null as any
  };

  

  message='';
  constructor(
    private teacherservice: TeacherService,
    private _router:Router
  ) { }

  ngOnInit(): void { 
    this.clearData();
   }

  onTecherAdd(){

    const data = {
      roll: this.student.roll,
      name: this.student.name,
      dob: this.student.dob,
      score: this.student.score
    };
    this.teacherservice.teacher_add_post(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message=res.error?res.error:"Result Added Successfully";
          this._router.navigateByUrl('/teacher/viewall');
        },
        error: (e) => {
          this._router.navigateByUrl('/error/loginfail');
          console.error(e);
        } 
      });
  }
  clearData(): void {
    const data = {
      roll: null,
      name: null,
      dob: null,
      score: null
    };
  } 
   
}


