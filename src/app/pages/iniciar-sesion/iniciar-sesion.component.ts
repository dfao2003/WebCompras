import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent {

  usuario: string = "";
  contrasena: string = "";

  mensaje: string = "";

  constructor(private serviciosUsuario: UsuariosService){

  }

  IniciarSesion(){
    this.serviciosUsuario.iniciarSesion(this.usuario,this.contrasena).subscribe(data=>{
    console.log("Usuario"+ Object.values(data));
    localStorage.setItem('usuario', JSON.stringify(data));
    }); 
  }
}
