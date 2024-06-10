import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { FormsModule } from '@angular/forms';
import { SampleDirectiveDirective } from '../Directive/sample-directive.directive';
import { HostBindingDirective } from '../Directive/host-binding.directive';
import { TestServiceService } from '../test-service.service';

fdescribe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let service:TestServiceService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent,SampleDirectiveDirective,HostBindingDirective],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TestServiceService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call func method", ()=>{
    spyOn(component,'func').and.callThrough();
    component.func();
    expect(component.func).toHaveBeenCalled()
  })
});
