import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: 'recuperar-contrasena.page.html',
  styleUrls: ['recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage {
  correo: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async recuperarContrasena() {
    if (this.correo === '') {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe ingresar un correo',
        buttons: ['OK'],
      });
      await alert.present();
    } else if (!this.esCorreoValido(this.correo)) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El correo electrónico no es válido',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Se ha enviado un correo con las instrucciones para recuperar su contraseña',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  esCorreoValido(correo: string): boolean {
    // Expresión regular para validar un correo electrónico básico
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(correo);
  }

  irAInicioSesion() {
    this.router.navigate(['/login']);
  }
}
