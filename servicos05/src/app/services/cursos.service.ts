import { Injectable, EventEmitter } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNOvoCurso = new EventEmitter<string>();

  private cursos: string[] =  ["Angular", "JAVA", "JavaScript"]

  constructor() { console.log("chamou")}

  public getCursos() {
    return this.cursos

  }
  addCurso(curso: string){
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso)
    CursosService.criouNOvoCurso.emit(curso)
  }
}

