import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesPeliculaPageRoutingModule } from './MoviesDetails-routing.module';

import { DetallesPeliculaPage } from './MoviesDetails.page';

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
