import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {
  correo : string = ''
  password : string = ''

 constructor(private router:Router){
 }
 ngOnInit(): void{

 }
  registrarUsuario(){
    const localUsuarios = JSON.parse(localStorage.getItem("usuario") || "[]")
    const usuario =
      {
        usuario: this.correo,
        password: this.password
      }
    localUsuarios.push(usuario)
    localStorage.setItem("usuario", JSON.stringify(localUsuarios))

    alert('Ha registrado al usuario Exitosamente')
    this.correo = ""
    this.password = ""
  }


}
