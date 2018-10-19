import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns = ['No', 'Book', 'Author', 'No_of_Pages', 'Price'];
  dataSource = [
    {No : 1, Book : 'C Programming', Author : 'ABC', No_of_Pages : 100, Price : 100},
    {No : 2, Book : 'C++ Programming', Author : 'PQR', No_of_Pages : 200, Price : 200},
    {No : 3, Book : 'JAVA Programming', Author : 'XYZ', No_of_Pages : 300, Price : 300},
    {No : 4, Book : 'PHP Programming', Author : 'LMN', No_of_Pages : 400, Price : 400},
  ];
}
