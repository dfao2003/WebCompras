import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {

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
  ]
}
