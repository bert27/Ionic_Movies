import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService  } from '../../services/get-data.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, delay} from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-Movies',
  templateUrl: 'Movies.page.html',
  styleUrls: ['Movies.page.scss']
})
export class MoviesPage {
  constructor(
  private http: HttpClient,
  private loadingCtrl: LoadingController,
  private getData: GetDataService) {
    }

  private DataMovies=[];
  private newSearch=[];
  onInput(event: any) {
    let val = event.target.value;
    console.log("Input busqueda" + val);
    this.SearchMovie(val);
  }


SearchMovie(titulo: string){
  //console.log("Buscando pelicula:" + titulo);
let service=this.getData.SearchMovie(titulo);
const newSearch2 = this.newSearch.filter(word => word.title.includes(titulo));
this.DataMovies=newSearch2;
    //console.table(newSearch2);
}

GetMovies(){
    let service=this.getData.GetMovies();
    service.subscribe((data)=>{
    var resultado=data;
    console.log(resultado);
    this.DataMovies=resultado;
     var size = 0, key;
    for (key in this.DataMovies) {
          if (this.DataMovies.hasOwnProperty(key)){
           size++;
             let Year=this.DataMovies[key].release_date;
             Year=Year.slice(0, 4);
             this.DataMovies[key].release_date=Year;
         }
      }
      this.newSearch=resultado;
    //  console.log("Tamaño: " + size);
    })
}
  ngOnInit() {

      this.GetMovies();
  }
}
