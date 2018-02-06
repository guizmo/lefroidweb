import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lot',
})
export class LotPipe implements PipeTransform {
  /**
   * Takes a lot id "lot_1" and remove _.
   * Takes a day id "d_1" and transform to date.
   */
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}
