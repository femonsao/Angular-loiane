import { CursosDetalhesComponent } from './../components/cursos/cursos-detalhes/cursos-detalhes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './../components/cursos/cursos.component';



@NgModule({
  declarations: [CursosComponent, CursosDetalhesComponent],
  imports: [ CommonModule ],
  exports: [],
  providers: [],
})
export class CursosModule {}
