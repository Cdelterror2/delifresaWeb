import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadModule } from './head/head.module';
import { HeadFiltersModule } from './head-filters/head-filters.module';

@NgModule({
  imports: [
    CommonModule,
    HeadModule,
    HeadFiltersModule
  ],
  exports: [
    HeadModule,
    HeadFiltersModule
  ]
})
export class DelifresaModule { }
