import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  page: number;
  movies: Movie[];

  constructor(
  private http: HttpClient,
  private loadingCtrl: LoadingController) {
    }

  private ListaPeliculas_Http=[];

  ngOnInit() {
    this.page = 1;
    this.movies = null;

  this.ObtenerPeliculas().subscribe((data)=>{
    this.ListaPeliculas_Http=data.results;
    console.log(this.ListaPeliculas_Http);
    })

  }

ObtenerPeliculas(){
  return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=fbf5e48d5952c6422d10deb441d0f5c9");
}

}
