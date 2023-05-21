import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent {

  constructor(private _location: Location) {}

  goBack(){
    this._location.back()
  }
}
