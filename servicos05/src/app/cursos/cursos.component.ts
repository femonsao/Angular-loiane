import { Component, OnInit } from '@angular/core';
import { CursosService } from '../services/cursos.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.populateCursos()

    CursosService.criouNOvoCurso.subscribe(curso => {
      this.cursos.push(curso)
    });

  }

  populateCursos() {
    this.cursos = this.cursosService.getCursos()
  }

}
