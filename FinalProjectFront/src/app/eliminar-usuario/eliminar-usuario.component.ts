import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {

  constructor(private datosService: DatosService) { }

  ngOnInit() {
  }

  eliminarUsuario() {
    this.datosService.eliminarUsuario()
      .then(res => {
        console.log(res);
      })
  }
}
