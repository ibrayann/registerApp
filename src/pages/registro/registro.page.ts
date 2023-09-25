import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  registrar() {
    if (this.contrasena === this.confirmarContrasena) {
      if (this.esCorreoValido(this.correo)) {
        this.irAInicioSesion();
      } else {
        this.mostrarAlerta('El correo electrónico no es válido');
      }
    } else {
      this.mostrarAlerta('Las contraseñas no coinciden');
    }
  }

  irAInicioSesion() {
    this.router.navigate(['/login']);
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }

  esCorreoValido(correo: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(correo);
  }
}
