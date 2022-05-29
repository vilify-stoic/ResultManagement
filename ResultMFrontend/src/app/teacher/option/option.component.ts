import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLogout():void{
    localStorage.removeItem('user');
    this.router.navigateByUrl('');
  }

}
