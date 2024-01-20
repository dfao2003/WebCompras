import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component'
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CategoriasProductosComponent } from './pages/categorias-productos/categorias-productos.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component'
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  {path: 'paginas/inicio', component: InicioComponent },
  {path: 'paginas/categorias', component: CategoriasComponent},
  {path: 'paginas/acercade', component: AcercadeComponent},
  {path: 'paginas/iniciarSesion', component: IniciarSesionComponent},
  {path: 'paginas/registrarse', component: RegistrarseComponent},
  {path: 'paginas/contacto', component: ContactoComponent},
  {path: 'paginas/editarusuario', component: EditarUsuarioComponent},
  {path: 'paginas/cat_productos', component: CategoriasProductosComponent},
  {path: 'paginas/producto', component: ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
