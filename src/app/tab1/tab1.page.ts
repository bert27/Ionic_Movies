import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService  } from '../services/get-data.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, delay} from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  page: number;
  InfoPelicula: string;

  constructor(
  private http: HttpClient,
  private loadingCtrl: LoadingController,
  private getData: GetDataService) {
    }

  private ListaPeliculas_Http=[];
  private nuevabusqueda=[];
  onInput(event: any) {
    let val = event.target.value;
    console.log("Input busqueda" + val);
    this.BuscarPelicula(val);
  }

/*
onClear(event: any) {
console.log("Clear busqueda");
}

DetallesPelicula(titulo: string){
    console.log("Pelicula seleccionada: " + titulo);
    this.InfoPelicula=titulo;
  }
*/

BuscarPelicula(titulo: string){
  //console.log("Buscando pelicula:" + titulo);
let service=this.getData.BuscarPelicula(titulo);
const nuevabusqueda2 = this.nuevabusqueda.filter(word => word.title.includes(titulo));
this.ListaPeliculas_Http=nuevabusqueda2;
    //console.table(nuevabusqueda2);
}

GetMovies(){
    let service=this.getData.ObtenerPeliculas();
    service.subscribe((data)=>{
    var resultado=data;
    console.log(resultado);
    this.ListaPeliculas_Http=resultado;
     var size = 0, key;
    for (key in this.ListaPeliculas_Http) {
          if (this.ListaPeliculas_Http.hasOwnProperty(key)){
           size++;
             let Year=this.ListaPeliculas_Http[key].release_date;
             Year=Year.slice(0, 4);
             this.ListaPeliculas_Http[key].release_date=Year;
         }
      }
      this.nuevabusqueda=resultado;
      console.log("Tamaño: " + size);
    })
}
  ngOnInit() {
      this.page = 1;
      this.GetMovies();
  }
}
