import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestComponent } from './test.component';
 import { FormsModule } from '@angular/forms';
import { EventEmitter, Input, Output } from '@angular/core';
import { TestServiceService } from '../test-service.service';

fdescribe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports:[FormsModule,Input,Output,EventEmitter],
      providers:[TestServiceService]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call func',()=>{
    component.func();
  })
});
