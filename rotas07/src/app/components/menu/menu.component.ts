import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private route:Router) { }

  ngOnInit(): void {
  }


  public goToHome(){
    this.route.navigateByUrl('/home')

  }
  public goToLogin(){
    this.route.navigateByUrl('')

  }
  public goToCursos(){
    this.route.navigateByUrl('/cursos')

  }
  public goToCursosDetail(id: number){
    this.route.navigateByUrl(`/cursos/` + id)
  }

}
