import { Injectable,ViewChild,AfterViewInit,Input } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { TloginComponent } from '../teacher/tlogin/tlogin.component';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    console.log(localStorage.getItem('user')); 
    if(localStorage.getItem('user')=="true"){
      return true;
    }
    else return false;
  }
  
}
