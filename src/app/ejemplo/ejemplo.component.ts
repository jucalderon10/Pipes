import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {
  texto: string;
  inputTexto: string;
  numero: number;
  numeroInput: number;
  newText: string;
  newTextInput: string;
  fechaActual1: Date;
  fechaActual2: Date;


  constructor() { 
    this.texto ="hola como estas";
    this.numero = 4;
    this.newText = "This time zone converter lets you visually and very quickly convert PDT to Bogota";
    this.fechaActual1 = new Date(2020,10,27,15,10,5);
    this.fechaActual2 = new Date(2020,10,27,23,10,5);
  }

  ngOnInit(): void {
  }

}
