import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

// bootstrap//

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteComponent} from './components/estudiante.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { SliderComponent } from './slider/slider.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    DemoComponent,
    HomeComponent,
    EstudiantesComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
