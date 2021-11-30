import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }


  public getCursos(){
    return [
      {
        id:1,
        name: "angular 2"
      },{
        id:2,
        name: 'Angular 9'
      }
    ]
  }
}
