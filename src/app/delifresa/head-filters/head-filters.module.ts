import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonFilterComponent } from './components/button-filter/button-filter.component';
import { HeadFiltersComponent } from './head-filters.component';

@NgModule({
  declarations: [
    ButtonFilterComponent,
    HeadFiltersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonFilterComponent,
    HeadFiltersComponent
  ]
})
export class HeadFiltersModule { }
