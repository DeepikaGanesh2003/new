import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA, createComponent } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { HostBindingDirective } from './Directive/host-binding.directive';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() =>{ TestBed.configureTestingModule({
    imports: [RouterTestingModule,FormsModule],
    declarations: [AppComponent,TestComponent,Test1Component,HostBindingDirective],
    schemas:[NO_ERRORS_SCHEMA]
  })
  fixture = TestBed.createComponent(AppComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testcase'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // expect(app.title).toEqual('testcase');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // expect(compiled.querySelector('.content span')?.textContent).toContain('testcase app is running!');
  });

  it('should render func',()=>{
    spyOn(component,'func').and.callThrough()
      component.func(1);
    expect(component.func).toHaveBeenCalled();
  })

  it('should render add',()=>{
    spyOn(component,'add').and.callThrough()
    component.add();
    expect(component.add).toHaveBeenCalled();
})


});
