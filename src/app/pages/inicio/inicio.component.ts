import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

<<<<<<< HEAD
  titulo: string = 'PRODUCTOS DESTACADO';
=======
  constructor(private router:Router){

  }

  irProducto(){
    this.router.navigate(['paginas/producto']);
  }
>>>>>>> main

}

