import { Component, OnInit } from '@angular/core';

import { CursosService } from '../services/cursos.service'

@Component({
  selector: 'app-criar-cursos',
  templateUrl: './criar-cursos.component.html',
  styleUrls: ['./criar-cursos.component.css'],
  providers:[CursosService]
})
export class CriarCursosComponent implements OnInit {

  cursos: string[] = [];

  constructor( private cursosServices:CursosService ) { }

  ngOnInit(): void {
    this.cursos =  this.cursosServices.getCursos()
  }
  onAddcurso(curso: string){
    this.cursosServices.addCurso(curso)
  }

}
