import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {

  constructor(private router: Router) {}

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
