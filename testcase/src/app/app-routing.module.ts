import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'test1', component: Test1Component},
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
