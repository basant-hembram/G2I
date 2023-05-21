import { Component } from '@angular/core';
import {Location} from '@angular/common';
import { NgxOtpInputConfig } from 'ngx-otp-input';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent {

  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 5,
    autofocus: true,
    classList: {
      container: 'justify-content-evenly',
      inputBox: 'otp-wrapper',
      input: 'otp-input',
      inputFilled: 'otp-filled',
      inputDisabled: 'otp-disabled',
      inputSuccess: 'otp-success',
      inputError: 'otp-error',
    },
  };

  constructor(private _location: Location) {}



  goBack(){
    this._location.back()
  }
  handleFillEvent(value: string): void {
    console.log(value);
  }
}
