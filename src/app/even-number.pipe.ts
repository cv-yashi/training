import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenNumber',
  pure: false
})
export class EvenNumberPipe implements PipeTransform {

  transform(values: number[]): number[] {
    console.log("Trasform called");
    return values.filter(num => num % 2 == 0);
  }

}
