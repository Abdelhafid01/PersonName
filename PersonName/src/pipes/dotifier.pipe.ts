import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dotifier',
  standalone: true
})
export class DotifierPipe implements PipeTransform {

  transform(value: string, type?: string): string {
    let newValue: string = '';
    if (type === '' || type === undefined || type === null || type === 'dotify') {
      if (value) {
        let char: string;
        for (let i = 0; i < value.length; i++) {
          if (value.charAt(i) !== ' ') {
            char = value.charAt(i).replace(value.charAt(i), value.charAt(i)+'.');
            newValue = newValue + char;
          } else if (value.charAt(i) === ' ') {
            newValue = newValue + ' ';
          }
        }
      }
      return newValue;
    } else if (type === 'same') {
      return value;
    }
    return value;
  }

}
