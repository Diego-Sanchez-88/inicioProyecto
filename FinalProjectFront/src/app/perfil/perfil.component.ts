import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  mostrarTextArea: boolean;
  usuario: string;

  constructor(private datosService: DatosService) {
    this.mostrarTextArea = false;
  }

  ngOnInit() {
    this.datosService.getUsuario()
      .then(response => {
        // console.log(response);
        this.usuario = response;
      });
  }

  onSubirRelato() {
    this.mostrarTextArea = !this.mostrarTextArea;
  }

}
