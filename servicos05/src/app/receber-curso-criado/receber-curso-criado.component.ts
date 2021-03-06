import { Component, OnInit } from '@angular/core';

import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  curso: string | undefined;

  constructor( private cursosServices:CursosService ) { }

  ngOnInit(): void {
    this.cursosServices.emitirCursoCriado.subscribe(cursoCriado=>{

      this.curso = cursoCriado

    })
  }

}
