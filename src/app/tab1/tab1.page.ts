import { Component } from '@angular/core';
//import {GetPeliculas } from '../services/get-peliculas.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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
//private ListaPeliculas=get_Peliculas;

//constructor(private getPeliculas: GetPeliculas ) {
constructor() {
  }

}
