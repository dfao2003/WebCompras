import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransaccionesService } from 'src/app/services/transacciones.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})

export class CarritoComponent{
  titulo: string = 'CARRITO DE COMPRAS';

  ListaDetalles: any;

  constructor(router: Router, private serviceTransacciones: TransaccionesService){
    this.obtenerDetalles();
  }

  obtenerDetalles(){
    this.ListaDetalles = this.serviceTransacciones.getDetalles();
    console.log("lista" + this.ListaDetalles);
  }
}
