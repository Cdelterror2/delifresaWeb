import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head-filters',
  templateUrl: './head-filters.component.html',
  styleUrl: './head-filters.component.css'
})

export class HeadFiltersComponent {

  @Input()
  public icon: string = '';

  objectItems: {icon:string, lengthItemns: number, name: string}[] = [
    {
      icon: 'fa-bread-slice',
      lengthItemns: 110,
      name: 'Todo el menu'
    },
    {
      icon: 'fa-bread-slice',
      lengthItemns: 20,
      name: 'Panes'
    },
    {
      icon: 'fa-cookie',
      lengthItemns: 20,
      name: 'Galletas'
    },
    {
      icon: 'fa-cheese',
      lengthItemns: 20,
      name: 'Donas'
    },
    {
      icon: 'fa-cookie',
      lengthItemns: 20,
      name: 'Postres'
    },
    {
      icon: 'fa-cheese',
      lengthItemns: 20,
      name: 'Sandwiches'
    }
  ];

  // getIcon(): string {
  //   return `fa-solid ${this.icon}`;
  // }

}
