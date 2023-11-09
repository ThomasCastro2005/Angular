import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  user = JSON.parse(localStorage.getItem("usuario") || "[]")
  usuario: String = '';
  password: String = '';


  comprobarUsuarioExistente(){
    for (let i = 0; i < this.user.length; i++) {
      if (this.user[i].usuario === this.usuario  && this.user[i].password === this.password) {
        return true
      }
    }
    return false
  }

 constructor(private router:Router){
 }
 ngOnInit(): void{

 }

 iniciarSesion(){
  if (this.comprobarUsuarioExistente()) {
    alert('Crendeciales Correctas')
    this.router.navigate(['dashboard']);
  }else{
    alert('Credenciales Incorrectas')
  }


 }

}
