import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadModule } from './head/head.module';
import { HeadFiltersModule } from './head-filters/head-filters.module';
import { SharedModule } from '../shared/shared.module';
import { ProductlistModule } from './products-list/productlist.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  imports: [
    CommonModule,
    HeadModule,
    HeadFiltersModule,
    SharedModule,
    ProductlistModule,
    PrimeNgModule,
  ],
  exports: [
    HeadModule,
    HeadFiltersModule,
    ProductlistModule
  ]
})
export class DelifresaModule { }
