import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconButton'
})

export class IconButtonPipe implements PipeTransform {

  transform(icons: string, library: 'libraryNg' | 'libraryOso'): string {

    if (library === 'libraryNg'){
      return `pi ${icons}`;
    }
    else if (library === 'libraryOso'){
      return `fa-solid ${icons}`;
    }

    return `pi ${icons}`;

  }
}
