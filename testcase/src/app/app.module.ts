import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { Test1Component } from './test1/test1.component';
import { SampleDirectiveDirective } from './Directive/sample-directive.directive';
import { HostBindingDirective } from './Directive/host-binding.directive';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    SampleDirectiveDirective,
    HostBindingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
