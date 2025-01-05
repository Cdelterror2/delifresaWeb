import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head-button',
  templateUrl: './head-button.component.html',
  styleUrl: './head-button.component.css'
})
export class HeadButtonComponent {

  @Input()
  public icon: string = '';

  @Input()
  public text: string = '';

  getIcon(): string {
    return `pi ${this.icon}`;
  }

}
