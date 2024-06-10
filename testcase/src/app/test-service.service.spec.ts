import { TestBed } from '@angular/core/testing';

import { TestServiceService } from './test-service.service';

describe('TestServiceService', () => {
  let service: TestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call addvalue',()=>{
    service.addvalue(1)
  })
  it('should call editvalue',()=>{
    service.editvalue(1)
  })
  it('should call emitvalue',()=>{
    service.emitValue(1);
  })
  it('should call getemitvalue',()=>{
    service.getemitValue();
  })
  it('should call clearvalue',()=>{
    service.clearvalue();
  })
  it('should call tabledata',()=>{
    service.tabledata();
  })

});
