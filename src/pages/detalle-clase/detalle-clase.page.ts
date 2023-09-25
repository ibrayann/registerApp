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

        this.clase = JSON.parse(claseParam);
        
        this.qrData = JSON.stringify(this.clase);
      }
    });
  }

  async generarQRCode() {

    if (this.clase) {
      this.router.navigate(['/scanner']);

    }
  }
}

