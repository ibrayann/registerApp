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
    // Aquí puedes agregar la lógica de autenticación
    // Por ejemplo, verificar las credenciales del usuario

    if (this.username === 'usuario@duocuc.cl') {
      // Autenticación exitosa, navega a otra página
      this.router.navigate(['/home']);
      
    } else if (this.username === 'usuario@profesor.cl') {
      // Autenticación fallida, muestra un mensaje de error
      this.router.navigate(['/home-profesor']);
    }
    else {
      // Autenticación fallida, muestra un mensaje de error
      console.log('Usuario o contraseña incorrectos');
    }
  }
  recuperarContrasena() {
    // Lógica para la recuperación de contraseña (agrega tu propia lógica aquí)

    // Redirige a la página de recuperación de contraseña
    this.router.navigate(['/recuperar-contrasena']);
  }

  // Función para el enlace "¿No tienes cuenta?, regístrate aquí"
  irARegistro() {
    // Redirige a la página de registro
    this.router.navigate(['/registro']);
  }
}