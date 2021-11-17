import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-valor',
  templateUrl: './teste-valor.component.html',
  styleUrls: ['./teste-valor.component.css']
})

export class TesteValorComponent implements OnInit {
  Valor:number = 588888888888825.21

  constructor() { }

  ngOnInit(): void {
    // this.getRoudeValue(this.Valor)
  }

  public getRoudeValue(valor: any){
    return this.Valor = Math.round(valor)


  }

}
