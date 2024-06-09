import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  value: any;
  @Input() data1: any;
  @Output() obj = new EventEmitter();
  ans: any;
  a: any = [];
  text: any = [];
  constructor(public data: TestServiceService) {

  }

  func() {
    this.obj.emit(this.value)
  }

}
