import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-filter',
  templateUrl: './button-filter.component.html',
  styleUrl: './button-filter.component.css'
})
export class ButtonFilterComponent {

  @Input()
  public icon: string = '';

  @Input()
  public name: string = '';

  @Input()
  public lengthItemns: number = 0;

  getIcon(): string {
    return `fa-solid ${this.icon}`;
  }

}
