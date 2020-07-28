import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { GetDataService  } from '../../services/get-data.service';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.page.html',
  styleUrls: ['./detalles-pelicula.page.scss'],
})
export class DetallesPeliculaPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  private getData: GetDataService
  ) { }
  private detalles=[];
  ngOnInit() {
    const movieId = this.activatedRoute.snapshot.params['Id_movie'];
    console.log(movieId);
      let service=this.getData.ObtenerDetallePelicula(movieId);

      service.subscribe((data)=>{
      let resultado=data;
      console.table(resultado);
 this.detalles.push(resultado);
 this.detalles=this.detalles[0];
console.log(this.detalles);
      })
  //  this.ObtenDatosPelicula(movieId);
}
ObtenDatosPelicula(id: number){

}

}
