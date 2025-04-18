import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionOrderComponent } from './section-order.component';


@NgModule({
  declarations: [
    SectionOrderComponent
  ],
  exports: [
    SectionOrderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SectionOrderModule { }
