import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CincoComponent } from './pages/cinco/cinco.component';
import { CuartoComponent } from './pages/cuarto/cuarto.component';
import { SegundoComponent } from './pages/segundo/segundo.component';
import { SeisComponent } from './pages/seis/seis.component';
import { SieteComponent } from './pages/siete/siete.component';
import { TerceroComponent } from './pages/tercero/tercero.component';

const routes: Routes = [
  {
    path: 'segunda-pagina',
    component: SegundoComponent,
  },
  {
    path: 'tercera-pagina',
    component: TerceroComponent,
  },
  {
    path: 'cuarta-pagina',
    component: CuartoComponent,
  },
  {
    path: 'quinta-pagina',
    component: CincoComponent,
  },
  {
    path: 'sexta-pagina',
    component: SeisComponent,
  },
  {
    path: 'septima-pagina',
    component: SieteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
