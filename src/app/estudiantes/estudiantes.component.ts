import { Component, OnInit } from '@angular/core';
import { Personas } from '../personas.model';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  personas: Personas[] = [
    {
      id: '1',
      image: 'assets/images/cris.jpeg',
      nombre: 'Cristofher Ramirez',
      documento: 1121919543,
      descripcion: 'Esto es una descripcion'
    },
    {
      id: '2',
      image: 'assets/images/rick.jpg',
      nombre: 'Cesar Peña',
      documento: 1006874229,
      descripcion: 'Esto es una descripcion'
    },
    {
      id: '3',
      image: 'assets/images/rick.jpg',
      nombre: 'Ivan Rojas',
      documento: 66669999,
      descripcion: 'Esto es una descripcion'
    },
    {
      id: '4',
      image: 'assets/images/rick.jpg',
      nombre: 'Ivan Rojas',
      documento: 66669999,
      descripcion: 'Esto es una descripcion'
    }, 
    {
      id: '5',
      image: 'assets/images/cris.jpeg',
      nombre: 'Cristofher Ramirez',
      documento: 1121919543,
      descripcion: 'Esto es una descripcion'
    },
    {
      id: '6',
      image: 'assets/images/rick.jpg',
      nombre: 'Cesar Peña',
      documento: 1006874229,
      descripcion: 'Esto es una descripcion'
    },
    {
      id: '7',
      image: 'assets/images/rick.jpg',
      nombre: 'Ivan Rojas',
      documento: 66669999,
      descripcion: 'Esto es una descripcion'
    },
    {
      id: '8',
      image: 'assets/images/rick.jpg',
      nombre: 'Ivan Rojas',
      documento: 66669999,
      descripcion: 'Esto es una descripcion'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  clickEstudiante(id: number): void{
    console.log('estudiante');
    console.log(id);
  }

}
