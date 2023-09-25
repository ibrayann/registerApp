import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-clase',
  templateUrl: './detalle-clase.page.html',
  styleUrls: ['./detalle-clase.page.scss'],
})
export class DetalleClasePage implements OnInit {
  clase: any;
  qrData: string = ''; // Datos para generar el código QR

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  
  

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const claseParam = params.get('clase');
      if (claseParam) {
        // Parsea la información de la clase desde la cadena JSON en la URL
        this.clase = JSON.parse(claseParam);
        // Luego puedes usar this.clase para mostrar la información en la página
        // También configura los datos para el código QR
        this.qrData = JSON.stringify(this.clase);
      }
    });
  }

  async generarQRCode() {
    // Verifica si hay datos para generar el código QR
    if (this.clase) {
      this.router.navigate(['/scanner']);
      // Abre un modal para mostrar el código QR
    }
  }
}

