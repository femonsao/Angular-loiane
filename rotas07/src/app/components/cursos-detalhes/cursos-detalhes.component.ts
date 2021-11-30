import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos-detalhes',
  templateUrl: './cursos-detalhes.component.html',
  styleUrls: ['./cursos-detalhes.component.css']
})
export class CursosDetalhesComponent implements OnInit, OnDestroy {

  public idCurso: string = ''

  public inscricao: Subscription | undefined;

  constructor(private activateRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.inscricao = this.activateRouter.params.subscribe((params: any)=>{
      this.idCurso  = params['id']
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    this.inscricao?.unsubscribe();
  }

}
