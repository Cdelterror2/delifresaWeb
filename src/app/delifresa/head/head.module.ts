import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head.component';
import { HeadButtonComponent } from './components/head-button/head-button.component';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    HeadButtonComponent,
    HeadComponent
  ],
  imports: [
    CommonModule,
    SharedModule
],
  exports: [
    HeadButtonComponent,
    HeadComponent
  ]
})
export class HeadModule { }
