import { Component, OnInit } from '@angular/core';
import { StudentinfoService } from '../studentinfo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public students = [];

  constructor(private studentService: StudentinfoService) { }

  ngOnInit() {
  }

  getStudentDetails() {
    this.studentService.getStudentDetails().subscribe(data => this.students = data);
  }
}
