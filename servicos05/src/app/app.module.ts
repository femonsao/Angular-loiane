import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CriarCursosModule } from './criar-cursos/crair-cursos.module';



@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriarCursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
