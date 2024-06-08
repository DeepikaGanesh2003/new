import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  edit: any;
  emitId: EventEmitter<any> = new EventEmitter()

  constructor() { }
  value: any[] = [];

  addvalue(data: any) {
    this.value.push(data);

  }
  emitValue(val: any) {
    this.emitId.emit(val)
  }
  getemitValue() {
    return this.emitId;
  }

  clearvalue() {
    this.value = [];
  }
  editvalue(index: any) {
    this.edit = index;
    console.log(this.edit);
  }
  tabledata() {
    return this.value;
  }
}
