import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-clase-profesor',
  templateUrl: './detalle-clase-profesor.page.html',
  styleUrls: ['./detalle-clase-profesor.page.scss'],
})
export class DetalleClaseProfesorPage implements OnInit {
  clase: any;
  qrData: string = '';
  listaAlumnos: string[] = [];
  mostrarImagen: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const claseParam = params.get('clase');
      if (claseParam) {
        // Parsea la información de la clase desde la cadena JSON en la URL
        this.clase = JSON.parse(claseParam);
        // Luego puedes usar this.clase para mostrar la información en la página
        // También configura los datos para el código QR
        this.qrData = JSON.stringify(this.clase);
        this.mostrarImagen = false;

        this.listaAlumnos = [
          "SEBASTIAN ANINIR LLANCAO",
          "ALDO MIGUEL ARROYO CASTRO",
          "MATIAS NICOLAS BELLO RODRIGUEZ",
          // ... (resto de los nombres de los alumnos)
          "BENJAMIN ANDRES SEPULVEDA TOLEDO",
          "FELIPE ANDRES VALDEBENITO CABRERA"
        ];
      }
    });
  }

  async generarQRCode() {
    // Verifica si hay datos para generar el código QR
    if (this.clase) {
      console.log('abrir cámara para código QR para la clase:');
      // Cambia la visibilidad de la imagen
      this.mostrarImagen = true;
      // Abre un modal para mostrar el código QR
    }
  }
}
