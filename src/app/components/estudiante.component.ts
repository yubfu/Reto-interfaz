import { Component, Input, Output, EventEmitter,
         OnChanges,
         SimpleChanges,
         OnInit,
         OnDestroy
} from '@angular/core';
import { Personas } from '../personas.model';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})

export class EstudianteComponent implements OnChanges, OnInit, OnDestroy{
    @Input() persona: Personas;
    @Output() estudianteClicked: EventEmitter<any> = new EventEmitter();

    constructor(){
        console.log('1. constructor');
    }

    ngOnChanges(changes: SimpleChanges): void{
        console.log('2. onChanges');
        console.log(changes);
    }

    ngOnInit(): void{
        console.log('3. onInit');
    }

    ngOnDestroy(): void{
        console.log('4. Destroy');
    }
    agregarObservacion(): void{
        console.log('Añadir observacion');
        this.estudianteClicked.emit(this.persona.id);
    }
}