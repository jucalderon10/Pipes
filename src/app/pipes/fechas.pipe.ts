import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechas'
})
export class FechasPipe implements PipeTransform {

  transform(fecha: Date): string {
    const fechaHoy = new Date();
    var respuesta =" ";
    if(fechaHoy.getMilliseconds() - fecha.getMilliseconds() < 3600000){
      respuesta = "Conectado hace pocos minutos";
    }
    else if(fechaHoy.getMilliseconds() - fecha.getMilliseconds() <= 3600000*12){
      respuesta="Conectado hace pocas horas";  
    } 
    
    return respuesta;

  }
}
