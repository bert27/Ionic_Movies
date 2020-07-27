import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesPeliculaPageRoutingModule } from './detalles-pelicula-routing.module';

import { DetallesPeliculaPage } from './detalles-pelicula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesPeliculaPageRoutingModule
  ],
  declarations: [DetallesPeliculaPage]
})
export class DetallesPeliculaPageModule {}
