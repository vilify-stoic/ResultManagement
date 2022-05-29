import { Component, OnInit , } from '@angular/core';
import { Router ,Params} from '@angular/router';
import { Student } from 'src/app/services/appModels/student.model';
import { TeacherService } from 'src/app/services/teacher.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  students?: Student[];

  constructor(
    private _teacherservice: TeacherService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.retrieveListOfStudent();
  }

  retrieveListOfStudent(): void {
    this._teacherservice.teacher_viewall_get()
      .subscribe({
        next: (data) => {
          this.students = data;
          console.log(data);
          console.log("data.id----------");
          console.log(data[0].roll);
          console.log(data[0]._id);
          console.log(data[0].name);
          
        },
        error: (e) => console.error(e)
      });
  }
  deleteUser(_id: any) {
    console.log(_id);
    this._teacherservice.teacher_delete_get(_id)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.retrieveListOfStudent();
      },
      error: (e) => {
        this.retrieveListOfStudent();
        console.error(e)
      }
    });
  }

  

}
