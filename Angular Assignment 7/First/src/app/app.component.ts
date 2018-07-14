import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User = {
    name: '',
    pass: ''
  };

  afterSubmit() {
    console.log(this.user.name);
    console.log(this.user.pass);
  }
}
