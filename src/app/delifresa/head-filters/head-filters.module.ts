import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonFilterComponent } from './components/button-filter/button-filter.component';
import { HeadFiltersComponent } from './head-filters.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ButtonFilterComponent,
    HeadFiltersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ButtonFilterComponent,
    HeadFiltersComponent
  ]
})
export class HeadFiltersModule { }
