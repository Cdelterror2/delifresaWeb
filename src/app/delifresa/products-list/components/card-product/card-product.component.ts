import { Component, Input } from '@angular/core';
import { Categories } from '../../../head-filters/interfaces/categories.type';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {

  @Input()
  public name: string = '';

  @Input()
  public category: Categories = 'Todo el menu';

  @Input()
  public price: number = 0;

}
