import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'Nombre alumno';
  title2= 'Ingrese el nombre';
  estudiantes = ['Cesar Peña', 'Cristofher Leonardo Ramirez Vargas', 'Ivan Saavedra', 'jhonathan Rojas'];



  constructor() { }

  ngOnInit(): void {
  }

  agregarEstudiante(elemento): void{
    this.estudiantes.push(elemento);

  }

  borrarEstudiante(index: number): void{
    this.estudiantes.splice(index, 1);
  }

}
