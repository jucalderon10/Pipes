import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Mayus1Pipe } from './pipes/mayus1.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { CuadradoPipe } from './pipes/cuadrado.pipe';
import { AlternarPipe } from './pipes/alternar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    Mayus1Pipe,
    CuadradoPipe,
    AlternarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
