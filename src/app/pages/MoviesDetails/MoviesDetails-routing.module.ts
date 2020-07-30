import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesPeliculaPage } from './MoviesDetails.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesPeliculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesPeliculaPageRoutingModule {}
