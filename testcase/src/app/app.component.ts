import { Component } from '@angular/core';
import { TestServiceService } from './test-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testcase';
  ans: any;
  name: any;
  out: any;
  form: any;

  
  constructor(private obj: TestServiceService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: []
    })
  }
  
  show = true;
  func(data: any) {
    this.ans = data;
  }

  add() {
    this.obj.addvalue(this.form.value);
    console.log(this.form.value);
  }
}
