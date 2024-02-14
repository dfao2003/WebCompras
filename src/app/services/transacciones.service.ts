import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  constructor(private http: HttpClient) { }

  getDetalles(){
    let url = environment.PATH_WS+"/compras/detalle?carro=2";
    console.log("link: " + url);
    return this.http.get<any>(url);
  }

}
