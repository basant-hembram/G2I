import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {
  currentRoute: string;
  leftContent: any;

  constructor(private router: Router) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.currentRoute = event.url;
        if (this.currentRoute == '/signup') {
          this.leftContent = 'Discover teacher within you'
        } else if (this.currentRoute == '/login') {
          this.leftContent = 'G2I'
        } else if (this.currentRoute == '/bank-details') {
          this.leftContent = 'Bank Details Or'
        } else if (this.currentRoute == '/qr') {
          this.leftContent = 'Start Learning Now'
        } else if (this.currentRoute == '/otp') {
          this.leftContent = 'OTP'
        }
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });

  }
}
