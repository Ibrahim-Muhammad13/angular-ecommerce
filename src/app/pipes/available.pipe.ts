import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'available'
})
export class AvailablePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value > 0 ? 'in stock' : 'out of stock';
  }

}
