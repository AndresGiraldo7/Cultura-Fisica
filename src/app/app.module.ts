import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/principal/app.component';
import { SegundoComponent } from './pages/segundo/segundo.component';
import { TerceroComponent } from './pages/tercero/tercero.component';
import { CuartoComponent } from './pages/cuarto/cuarto.component';
import { CincoComponent } from './pages/cinco/cinco.component';
import { SeisComponent } from './pages/seis/seis.component';
import { SieteComponent } from './pages/siete/siete.component';


@NgModule({
  declarations: [
    AppComponent,
    SegundoComponent,
    TerceroComponent,
    CuartoComponent,
    CincoComponent,
    SeisComponent,
    SieteComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
