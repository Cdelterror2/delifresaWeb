import { HeadModule } from './../head/head.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionOrderComponent } from './section-order.component';
import { HeadOrderComponent } from './components/head-order/head-order.component';
import { SharedModule } from "../../shared/shared.module";



@NgModule({
  declarations: [
    SectionOrderComponent,
    HeadOrderComponent,
  ],
  exports: [
    SectionOrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeadModule,
]
})
export class SectionOrderModule { }
