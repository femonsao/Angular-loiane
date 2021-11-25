import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploPipesComponent } from './components/exemplo-pipes/exemplo-pipes.component';
import { FilterArrayPipe } from './pipes/filter-array.pipe';
import { FiltroArrayImpuroPipe } from './pipes/filtro-array-impuro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemploPipesComponent,
    FilterArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
