import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pelicula } from '../../modelo/pelicula';
import { Observable } from 'rxjs/Observable';
import { ServicioProvider } from '../../providers/servicio/servicio'
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  peliculas: Observable<Pelicula[]>

  constructor(
    public navCtrl: NavController,
    public servicio: ServicioProvider
  ) {}

  
//Mostrar lista "GET"
  ngOnInit() {
    this.servicio.getPeliculas()
    .subscribe(
      (data) => {
        this.peliculas = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  //BorrarPelicula
  borrarPelicula(pelicula:Pelicula) {
    this.servicio.borrarPelicula(pelicula)
    .subscribe(
      borrado => console.log('borrado correctamente')
      ,
      error => console.log(error)
    );
  }

  //InsertarPelicula
  insertarPelicula() {
    let pelicula = {'codigo':58,'foto':'asdsadsadsad','titulo':'El pez','director':'Daniel','precio':58,'anio':2017,'stock':12,'descripcion':'asdasdsadads'};
    this.servicio.insertarPelicula(pelicula)
    .subscribe(
      pelicula => console.log('subido correctamente'),
      error => console.log(error)
    );
  }

  //ActualizarPelicula
  artualizarPelicula(pelicula:Pelicula) {
   pelicula = {'codigo':58,'foto':'asdsadsadsad','titulo':'El pez 2','director':'Daniel 2','precio':80,'anio':2027,'stock':122,'descripcion':'asdasadasdsdsadads'};
    this.servicio.actualizarPelicula('pelicula.codigo', pelicula)
    .subscribe(
      actualizado => console.log('actualizado correctamente'),
      error => console.log(error)
    );
  }

}
