import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'hello from parent';
  message1: string;

  receiveEvent($event) {
    this.message1 = $event;
  }
}
