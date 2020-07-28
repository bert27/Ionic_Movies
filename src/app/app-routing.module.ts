import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Peliculas/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detalles-pelicula',
    children:[{
      path: "",
      loadChildren: () => import('./Peliculas/tabs.module').then(m => m.TabsPageModule)
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
