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
    if (this.contrasena === this.confirmarContrasena) {
      this.irAInicioSesion();
    } else {
      console.log('Las contraseñas no coinciden');
    }
  }

  irAInicioSesion() {
    this.router.navigate(['/login']);
  }
}
