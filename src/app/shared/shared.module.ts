import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './components/head/head.component';
import { HeadButtonComponent } from './components/head-button/head-button.component';
import { IconButtonPipe } from '../products/pipes/icon-button.pipe';



@NgModule({
  exports: [
    HeadComponent
  ],
  declarations: [
    HeadComponent,
    HeadButtonComponent,
    IconButtonPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
