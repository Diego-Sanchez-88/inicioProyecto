import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-acordeon-relatos',
  templateUrl: './acordeon-relatos.component.html',
  styleUrls: ['./acordeon-relatos.component.css']
})
export class AcordeonRelatosComponent implements OnInit {

  arrRelatosUsuario: any[];

  constructor(private datosService: DatosService) {
    this.arrRelatosUsuario = [];
  }

  async ngOnInit() {
    // this.datosService.getRelatosUsuario()
    //   .then(response => {
    //     console.log(response);
    //     // esto funciona en GET  http://localhost:3000/api/usuario/23/relatos
    this.arrRelatosUsuario = await this.datosService.getRelatosUsuario();
    console.log(this.arrRelatosUsuario);
  }
}


