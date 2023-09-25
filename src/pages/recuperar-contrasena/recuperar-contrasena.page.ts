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
    this.irAInicioSesion();
  }

  irAInicioSesion() {
    this.router.navigate(['/login']);
  }
}
