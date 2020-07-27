import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPeliculasService {
  private ListaPeliculas=[
  {
    id: "1",
    titulo:"Matrix",
    imageUrl:"https://www.dafont.com/img/flags/es.gif",
    comentarios:["1","2"],

  },
  {
    id: "2",
    titulo:"Spiderman 2",
    imageUrl:"https://www.dafont.com/img/flags/es.gif",
    comentarios:["1","2"],
  },
  {
    id: "3",
    titulo:"Inception",
    imageUrl:"https://www.dafont.com/img/flags/es.gif",
    comentarios:["1","2"],
  },
  {
    id: "4",
    titulo:"Avatar",
    imageUrl:"https://www.dafont.com/img/flags/es.gif",
    comentarios:["1","2"],
  },
  {
    id: "5",
    titulo:"Jurassic Park",
    imageUrl:"https://www.dafont.com/img/flags/es.gif",
    comentarios:["1","2"],
  },


  ];
  constructor() {
/*
  get_Peliculas(){
    return [...this.ListaPeliculas]
  }

  get_Pelicula(PeliculaId: string){
return {
        ...this.ListaPeliculas.find(place =>{
            return place.id === PeliculaId
      })
      }
        }
*/



}
}
