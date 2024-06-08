import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  value: any;
  @Input() data1: any;
  @Output() obj = new EventEmitter();
  ans: any;
  a: any = [];
  text: any = [];
  constructor(public data: TestServiceService) {

  }


  ngOnInit() {
    this.data.getemitValue().subscribe((data: any) => {
      this.ans = data;
      this.text = this.data.value[this.ans];
    });
  }

  func() {
    this.obj.emit(this.value)
  }

}
