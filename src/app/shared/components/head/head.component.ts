import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {

  public currentDate: Date = new Date();

  @Input()
  public icons: string = '';
}
