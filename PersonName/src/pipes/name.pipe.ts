import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name',
  standalone: true
})
export class NamePipe implements PipeTransform {

  transform(value: any, invert?: boolean): any {
    if (invert === true) {
      return `${value.lastName} ${value.firstName}`;
    } else {
    return `${value.firstName} ${value.lastName}`;
    }
  }

}
