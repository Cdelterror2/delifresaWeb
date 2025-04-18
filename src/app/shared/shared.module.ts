import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconButtonPipe } from './pipes/icon-button.pipe';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    IconButtonPipe,
  ],
  exports: [
    IconButtonPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ]
})
export class SharedModule { }
