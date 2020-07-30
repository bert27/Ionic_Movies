import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
  loadChildren: () => import('./pages/Movies/Movies.module').then(m => m.MoviesPageModule)
  },
  {
    path: 'MoviesDetails',
    children:[{
      path: "",
    loadChildren: () => import('./pages/Movies/Movies.module').then(m => m.MoviesPageModule)
    },

    {
      path:":Id_movie",
      loadChildren: () => import('./pages/MoviesDetails/MoviesDetails.module').then( m => m.DetallesPeliculaPageModule)
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
