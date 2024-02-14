import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/domain/Producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent{
  
  producto: Producto = new Producto();

  constructor(private router: Router, private route: ActivatedRoute, private servicioProductos: ProductosService){
    this.route.params.subscribe(params => {
      console.log("Parametros: " + params)
      if(params['codigo']){
        this.loadProducto(params['codigo']);
      }
    })
  }

  loadProducto(codigo: number){
    this.servicioProductos.getProductoCodigo(codigo).subscribe(data => {
      console.log("loadProducto: " + data);
      this.producto = <any>data;
    });
  }



  

}
