import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {
  texto: string;
  inputTexto: string;

  constructor() { 
    this.texto ="hola como estas";
  }

  ngOnInit(): void {
  }

}
