import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { InstitucionComponent } from './pages/institucion/institucion.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent},
  { path: 'registrarse', component: RegistrarseComponent},
  { path: 'institucion', component: InstitucionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
