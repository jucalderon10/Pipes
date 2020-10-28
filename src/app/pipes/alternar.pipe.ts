import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alternar'
})
export class AlternarPipe implements PipeTransform {
  textoAlter:string;

  transform(newText:string): string {
    this.textoAlter="";
    for (let i=0; i < newText.length; i++) {
      this.textoAlter = this.textoAlter + newText[i].toUpperCase() + newText[i+1].toLowerCase();
      i++;
      if(newText[i]==" " || newText[i+1]==" "){
        this.textoAlter = this.textoAlter + " ";
        i++;
      }
    }
    return this.textoAlter;
  }
}
