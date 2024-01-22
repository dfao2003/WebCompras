import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias-productos',
  templateUrl: './categorias-productos.component.html',
  styleUrls: ['./categorias-productos.component.scss']
})
export class CategoriasProductosComponent {

  titulo: string = 'PRODUCTOS DE [CATEGORIA]';

  constructor(private route:Router){

  }

  IrProd(){
    this.route.navigate(['paginas/producto']);
  }
}
