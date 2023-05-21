import { Component } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent {

  constructor(private _location: Location, private router: Router) {}
  
  roleType(role: any){
    console.log(role)
    localStorage.setItem('roleType', role);
    this.router.navigate(['/signup'])
  }

  goHome(){
    this._location.back()
  }
}
