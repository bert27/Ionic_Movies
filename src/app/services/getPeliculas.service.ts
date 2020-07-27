/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Movie } from '../models/movie';*/
/*
@Injectable({
  providedIn: 'root'
})*/
export class GetPeliculasService {

  constructor(
    //private http: HttpClient) {}
) {}
  getJson() {
  //  return this.http.get("https://api.themoviedb.org/3/movie/550?api_key=fbf5e48d5952c6422d10deb441d0f5c9");
/*this.http.get("").subscribe((data)=>{
  console.table(data);
})*/


  }
  /*
getPopularMovies(page: number) {
  return this.http.get(`${this.baseUrl}/movie/popular${this.getParams({ page: page })}`)
    .pipe(map((res: any) => <Movie[]>res.results))
    .pipe(delay(500));
}

private getParams(params?: any) {
  const obj = { ...this.params, ...params };
  const str = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  return '?' + str.join('&');
}
*/


}
