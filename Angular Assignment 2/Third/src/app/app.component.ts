import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!--The content below is only a placeholder and can be replaced.-->
  <div style="text-align:center">
    <h1>
      Welcome to Marvellous Infosystems!
    </h1>
    <input type="text"/>
  </div>`,
  styles: [`h1{
    color: blue;
}`]
})
export class AppComponent {
  title = 'app';
}
