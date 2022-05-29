import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/services/appModels/student.model';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  student: Student = {
    roll:0,
    name:'',
    dob:new Date,
    score:0
  };
  message="";

  constructor(
    private _teacherservice: TeacherService,
    private route: ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.getstudent(this.route.snapshot.params["id"]);
    console.log(this.route.snapshot.params["id"]);
  }
  
  getstudent(id: string): void {
    console.log("Get student");
    console.log(id);
    this._teacherservice.teacher_edit_get(id)
      .subscribe({
        next: (data) => {
          this.student = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  
  updateTutorial(): void {
    this.message = '';
    console.log("res");
    this._teacherservice.teacher_edit_post(this.route.snapshot.params["id"], this.student)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Student was updated successfully!';
          this._router.navigateByUrl('/teacher/viewall');
        },
        error: (e) => console.error(e)
      });
  }

}
