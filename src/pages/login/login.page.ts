import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {

    if (this.username === 'usuario@duocuc.cl') {
      this.router.navigate(['/home']);
      
    } else if (this.username === 'usuario@profesor.cl') {
      this.router.navigate(['/home-profesor']);
    }
    else {
      console.log('Usuario o contraseña incorrectos');
    }
  }
  recuperarContrasena() {
    this.router.navigate(['/recuperar-contrasena']);
  }


  irARegistro() {

    this.router.navigate(['/registro']);
  }
}