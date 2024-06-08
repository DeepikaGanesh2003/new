import { Component } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  pop: boolean = false;
  ans: any = [];
  constructor(public data: TestServiceService, private fc: AppComponent) { }

  clearvalue() {
    this.fc.out = "";
    this.pop = false;
  }
  edit(index: any, ans: any) {
    this.data.emitValue(index);
    this.pop = true;
    this.ans = this.data.value;
  }

}
