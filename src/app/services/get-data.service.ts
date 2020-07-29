import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }
  private ListaPeliculas_Http=[];

    ObtenerPeliculas(){
      return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=fbf5e48d5952c6422d10deb441d0f5c9&language=es-ES")
      .pipe(map((res: any) => this.ListaPeliculas_Http=res.results))
      .pipe(delay(500));
    }

    ObtenerDetallePelicula(id: number){
      console.log("Obteniendo datos de la pelicula con Id: " + id );
      return this.http.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=fbf5e48d5952c6422d10deb441d0f5c9&language=es-ES&append_to_response=credits")
    }

    BuscarPelicula(query: string){
      console.log("Buscando pelicula:" + query);
      return this.http.get("https://api.themoviedb.org/3/search/movie/" + query + "?api_key=fbf5e48d5952c6422d10deb441d0f5c9&language=es-ES")
    }


}
