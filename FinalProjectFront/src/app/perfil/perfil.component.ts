import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  mostrarTextArea: boolean;
  usuario: string;

  constructor(private datosService: DatosService, private router: Router) {
    this.mostrarTextArea = false;
  }

  ngOnInit() {
    if (localStorage.getItem('user-token')) {
      this.datosService.getUsuario()
        .then(response => {
          // console.log(response);
          if (response['error']) {
            this.router.navigate(['/login']);
          } else {
            this.usuario = response;
          }

        });
    } else {
      this.router.navigate(['/login']);
    }
  }

  onSubirRelato() {
    this.router.navigate(['/perfil/nuevo']);
  }

  cerrarSesion() {
    localStorage.removeItem('user-token');
    this.router.navigate(['/login']);
  }
}
