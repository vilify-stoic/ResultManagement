import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TeacherService} from '../../services/teacher.service';


@Component({
  selector: 'app-tlogin',
  templateUrl: './tlogin.component.html',
  styleUrls: ['./tlogin.component.css']
})
export class TloginComponent implements OnInit {

  @Input() password:string="";
  message="";
  
  constructor(
    private _teacherService:TeacherService,
    private _router:Router,
    private _route:ActivatedRoute
    
  ) { }

  ngOnInit(): void {
  }

  onTeacherLogin():void{
    const data={
      password:this.password
    }
   
    console.log(this.password);
    this._teacherService.teacher_login_post(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('user',"true");
        this.message=res.error?res.error:"Login Successful !";
        this._router.navigateByUrl('/teacher/add');
      },
      
      error: (e) => {
        console.error(e);
        this._router.navigateByUrl('/error/loginfail');
      }
    });
}


onBack():void{
  localStorage.removeItem('user');
  this._router.navigateByUrl('');
}

  getCLear(): void {
      this.password= '';
  }

  

}
