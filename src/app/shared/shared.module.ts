import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconButtonPipe } from './pipes/icon-button.pipe';

@NgModule({
  declarations: [
    IconButtonPipe,
  ],
  exports: [
    IconButtonPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
