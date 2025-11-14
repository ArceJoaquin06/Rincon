import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { InstitucionComponent } from './pages/institucion/institucion.component';


@NgModule({
  declarations: [
    MainComponent,
    InicioComponent,
    InicioSesionComponent,
    RegistrarseComponent,
    InstitucionComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
