import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenNumber',
  pure: false
})
export class EvenNumberPipe implements PipeTransform {

  transform(values: number[]): number[] {
    return values.filter(num => num % 2 == 0);
  }

}
