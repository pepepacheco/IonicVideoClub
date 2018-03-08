import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Pelicula } from '../../modelo/pelicula';

@Injectable()
export class ServicioProvider {

  constructor(public http: HttpClient) {
  }

  url = 'http://192.168.0.164:3000/peliculas/';

  getPeliculas():Observable<any> {
    return this.http.get(this.url);
  }

  insertarPelicula(pelicula: Pelicula): Observable<Pelicula>{
    let json = JSON.stringify(pelicula);
    console.log('json:' + json);
    // let params = "json="+json;
    let headers = new HttpHeaders({'Content-Type':'application/json'});
     
    return this.http.post<Pelicula>(this.url, json, {headers: headers});
  }

  borrarPelicula(pelicula:Pelicula): Observable<{}> {
    return this.http.delete(this.url+pelicula.codigo);
  }

  actualizarPelicula(codigo:string, pelicula:Pelicula): Observable<Pelicula> {
    let json = JSON.stringify(pelicula);
    console.log('json:' + json);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put<Pelicula>(this.url+pelicula.codigo, json, {headers:headers});
  }

}
