import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: 'recuperar-contrasena.page.html',
  styleUrls: ['recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage {
  correo: string = '';

  constructor(private router: Router) {}

  recuperarContrasena() {
    // Aquí puedes agregar la lógica para enviar un correo de recuperación de contraseña
    // y redirigir al usuario a una página de confirmación o a la página de inicio de sesión.
    
    // Por ejemplo, podrías verificar si el correo existe en tu base de datos
    // y si es así, enviar un correo con un enlace de recuperación de contraseña.
    
    // Luego, redirige al usuario a la página de inicio de sesión
    this.irAInicioSesion();
  }

  irAInicioSesion() {
    this.router.navigate(['/login']);
  }
}
