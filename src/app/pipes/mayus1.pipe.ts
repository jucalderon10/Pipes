import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayus1'
})
export class Mayus1Pipe implements PipeTransform {
  
  newText:string;
  
  
  transform(text: string):string{
    const space = text.split(" ");
    this.newText="";
    space.forEach(element =>{
      this.newText = this.newText + element[0].toUpperCase() + element.substr(1).toLowerCase() + " "
    });
    return this.newText;
  }

}
