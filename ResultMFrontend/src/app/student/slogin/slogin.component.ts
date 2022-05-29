import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-slogin',
  templateUrl: './slogin.component.html',
  styleUrls: ['./slogin.component.css']
})
export class SloginComponent implements OnInit {

  @Input() roll:any;
  @Input() dob:any;

  massage='';

  constructor(
    private _teacherService:TeacherService,
    private _router:Router,
    private _route:ActivatedRoute,
    private _forms:FormsModule
  ) { }

  ngOnInit(): void {
    
  }

  onStudentLogin():void{
    console.log("123");
    const studentData={
      roll:this.roll,
      dob:this.dob,
    }
    console.log(this.roll);
    console.log(studentData.roll);
    if(this.roll==null || this.dob==null){
      this._router.navigateByUrl('/error/loginfail');
    }
    else{
      this._teacherService.student_login_post(studentData)
      .subscribe({
        next: (res) => {
          this.massage=res.error?res.error:"Login Successful !";
          localStorage.setItem('user',"true");
          this._router.navigateByUrl('/student/view',{state:res.one});
        },
        error: (e) => {
          this._router.navigateByUrl('/error/loginfail');
          console.error(e)
        }
      });
    }
    
      
  }
 
}


