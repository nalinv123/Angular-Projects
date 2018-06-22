import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!--The content below is only a placeholder and can be replaced.-->
  <div style="text-align:center">
    <h1>
      Welcome to {{ title }}!
    </h1>
    <h2>
      {{ info }}
    </h2>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous Infosystems';
  info = 'Educating For Better Tommorow';
}
