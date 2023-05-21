import { Component, HostListener, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'G2I';
  constructor(@Inject(DOCUMENT) private document: Document,  private renderer: Renderer2) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 ||     
    document.documentElement.scrollTop > 20) {
      this.renderer.addClass(document.body, 'scrolled');
    }
    else {
      this.renderer.removeClass(document.body, 'scrolled');
    }
  }
}
