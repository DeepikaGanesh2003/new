import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1Component } from './test1.component';
import { AppComponent } from '../app.component';
import { TestServiceService } from '../test-service.service';

describe('Test1Component', () => {
  let component: Test1Component;
  let fixture: ComponentFixture<Test1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Test1Component,AppComponent],
      imports:[],
      providers:[TestServiceService]
    });
    fixture = TestBed.createComponent(Test1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call clearValue',()=>{
    component.clearvalue()
  })
  
  it('should call edit',()=>{
    component.edit(1,1);
  })
});
