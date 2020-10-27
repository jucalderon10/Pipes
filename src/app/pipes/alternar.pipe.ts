import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alternar'
})
export class AlternarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
