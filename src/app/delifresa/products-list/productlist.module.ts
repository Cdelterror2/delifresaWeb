import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionproductlistComponent } from './sectionproductlist.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    CardProductComponent,
    SectionproductlistComponent,
  ],
  exports: [
    CardProductComponent,
    SectionproductlistComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ]
})
export class ProductlistModule { }
