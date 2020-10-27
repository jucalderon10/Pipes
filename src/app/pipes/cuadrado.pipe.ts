import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuadrado'
})
export class CuadradoPipe implements PipeTransform {

  transform(numero:number): number {
    return numero*numero;
    
  }

}
