import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  login() {
    if (this.esCorreoValido(this.username)) {
      if (this.username === 'usuario@duocuc.cl') {
        this.router.navigate(['/home']);
      } else if (this.username === 'usuario@profesor.cl') {
        this.router.navigate(['/home-profesor']);
      } else {
        this.mostrarAlerta('Usuario o contraseña incorrectos');
      }
    } else {
      this.mostrarAlerta('El nombre de usuario no es válido');
    }
  }

  recuperarContrasena() {
    this.router.navigate(['/recuperar-contrasena']);
  }

  irARegistro() {
    this.router.navigate(['/registro']);
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
