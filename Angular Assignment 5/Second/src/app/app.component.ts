import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  student: Student = {
    name : 'abcd'
  };

  onSubmit() {
    console.log('hello');
  }
}
