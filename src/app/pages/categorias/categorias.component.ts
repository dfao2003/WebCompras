import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {

  constructor(private router: Router){

  }

  categorias = [
    {title: 'Belleza', imagen: 'bell'},
    {title: 'Computadoras', imagen: 'comp'},
    {title: 'Deportes', imagen: 'dep'},
    {title: 'Electronicos', imagen: 'elec'},
    {title: 'Hogar', imagen: 'hog'},
    {title: 'Jugueteria', imagen: 'jug'},
    {title: 'Libros', imagen: 'libro'},
    {title: 'Ropa', imagen: 'ropa'},
    {title: 'Salud', imagen: 'salud'},
  ];

  IrProductos(){
    this.router.navigate(['paginas/cat_productos']);
  }
}
