import { Injectable } from '@angular/core';
import { Student } from './appModels/student.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl='http://localhost:3100';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  
  constructor(private http :HttpClient) { }

  teacher_login_post(pass:any):Observable<any>{
    console.log("pass------");
    console.log(pass);
    const value= this.http.post(`${baseUrl}/teacher/login`,pass);
    console.log(value);
    
    return value;
  }

  student_login_post(pass:any):Observable<any>{
    console.log(pass);
    return this.http.post(`${baseUrl}/student/login`,pass);
  }
  teacher_viewall_get():Observable<Student[]>{
    return this.http.get<Student[]>(`${baseUrl}/teacher/viewall`);
  }
  teacher_add_post(std:Student):Observable<any>{
    console.log("std");
    return this.http.post(`${baseUrl}/teacher/add`,std);
  }

  teacher_edit_get(id:any):Observable<any>{
    console.log("get");
    console.log(id);
    return this.http.get(`${baseUrl}/teacher/edit/${id}`);
  }

  teacher_edit_post(id:any, std:Student):Observable<any>{
    console.log("post");
    console.log(id);
    return this.http.post(`${baseUrl}/teacher/edit/${id}`,std);
  }

  teacher_delete_get(id:any):Observable<any>{
    return this.http.get(`${baseUrl}/teacher/delete/${id}`);
  }

}
