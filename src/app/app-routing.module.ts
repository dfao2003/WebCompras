import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  {path: 'paginas/inicio', component: InicioComponent },
  {path: 'paginas/categorias', component: CategoriasComponent},
  {path: 'paginas/acercade', component: AcercadeComponent},
  {path: 'paginas/producto', component: ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
