import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  paginas = [
    {path: 'paginas/inicio', title:'Inicio'},
    {path: 'paginas/acercade', title: 'Acerca de'},
    {path: 'paginas/categorias', title: 'Categorias'},
    {path: 'paginas/registrarse', title: 'Registrarse'},
    {path: 'paginas/iniciarSesion', title: 'Iniciar sesion'}
  ]
}
