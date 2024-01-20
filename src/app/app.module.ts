import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    CategoriasComponent,
    CarritoComponent,
    AcercadeComponent,
    FooterComponent,
    HeaderComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
