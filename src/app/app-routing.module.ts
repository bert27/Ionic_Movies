import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
  loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'detalles-pelicula',
    children:[{
      path: "",
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
    },

    {
      path:":Id_movie",
      loadChildren: () => import('./pages/detalles-pelicula/detalles-pelicula.module').then( m => m.DetallesPeliculaPageModule)
    }
  ],

  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
