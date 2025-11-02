import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Plixxo Admin Panel';
  currentYear = new Date().getFullYear();
  
  getAngularVersion(): string {
    return '11.0.4';
  }
}
