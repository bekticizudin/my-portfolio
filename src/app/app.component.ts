import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';
  isMobileNavOpen = false;

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }
}
