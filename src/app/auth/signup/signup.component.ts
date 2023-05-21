import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  hidePass = true;
  hideConPass = true;
  role: any 
  constructor( private router: Router) {}

  ngOnInit(){
    const selected_role = localStorage.getItem('roleType')
    this.role = selected_role
  }
}
