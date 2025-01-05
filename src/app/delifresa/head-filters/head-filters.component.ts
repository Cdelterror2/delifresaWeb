import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head-filters',
  templateUrl: './head-filters.component.html',
  styleUrl: './head-filters.component.css'
})

export class HeadFiltersComponent {


  objectItems: {icono:String, lengthItemns: number, name: string}[] = [
    {
      icono: '',
      lengthItemns: 20,
      name: 'Panes'
    }
  ];

}
