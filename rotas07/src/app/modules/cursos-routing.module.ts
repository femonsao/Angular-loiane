
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosDetalhesComponent } from '../components/cursos/cursos-detalhes/cursos-detalhes.component';
import { CursosComponent } from '../components/cursos/cursos.component';


const cursosRoutes: Routes = [

  {
    path: 'curso/:id',
    component: CursosDetalhesComponent
  },
  {
    path: '',
    component: CursosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
