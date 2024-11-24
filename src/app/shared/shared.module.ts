import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './components/head/head.component';
import { HeadButtonComponent } from './components/head-button/head-button.component';



@NgModule({
  exports: [
    HeadComponent
  ],
  declarations: [
    HeadComponent,
    HeadButtonComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
