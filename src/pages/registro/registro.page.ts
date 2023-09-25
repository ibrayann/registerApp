import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  correo: string = '';
  contrasena: string = '';
  confirmarContrasena: string = '';

  constructor(private router: Router) {}

  registrar() {
    // Aquí puedes agregar la lógica para registrar al usuario
    // Verificar que las contraseñas coincidan y realizar el registro en tu sistema
    if (this.contrasena === this.confirmarContrasena) {
      // Realizar el registro aquí y luego redirigir al usuario a la página de inicio de sesión
      this.irAInicioSesion();
    } else {
      // Mostrar un mensaje de error si las contraseñas no coinciden
      console.log('Las contraseñas no coinciden');
    }
  }

  irAInicioSesion() {
    this.router.navigate(['/login']);
  }
}
