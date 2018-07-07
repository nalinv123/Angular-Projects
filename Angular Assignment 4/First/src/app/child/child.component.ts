import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public parentData;
  public message = 'Hii From child';

  @Output() eventEmiiter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendEvent() {
    this.eventEmiiter.emit(this.message);
  }
}
