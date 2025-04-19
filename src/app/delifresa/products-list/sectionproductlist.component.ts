import { Component } from '@angular/core';
import { Categories } from '../head-filters/interfaces/categories.type';

@Component({
  selector: 'app-sectionproductlist',
  templateUrl: './sectionproductlist.component.html',
  styleUrl: './sectionproductlist.component.css'
})
export class SectionproductlistComponent {

  products: {name:string, category:Categories, price:number}[] = [
    {
      name: 'Pastel de zanahoria',
      category: 'Postres',
      price: 20
    },
    {
      name: 'Pastel de zanahoria',
      category: 'Postres',
      price: 20
    },
    {
      name: 'Pastel de zanahoria',
      category: 'Postres',
      price: 20
    },
    {
      name: 'Pastel de zanahoria',
      category: 'Postres',
      price: 20
    },
    {
      name: 'Pastel de zanahoria',
      category: 'Postres',
      price: 20
    }
  ];
}
