import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconButton'
})

export class IconButtonPipe implements PipeTransform {

  transform(icons: string): string {
    return `pi ${icons}`;
  }
}
