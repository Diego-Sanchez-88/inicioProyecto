import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {

  constructor(private datosService: DatosService, private router: Router) { }

  ngOnInit() {
  }

  borrarUsuario(pUsuarioId) {
    console.log(pUsuarioId);  // --> undefined
    // console.log('a borrá');  // --> funciona
    this.datosService.eliminarUsuario(pUsuarioId)
      .then(res => {
        localStorage.removeItem('user-token');
        this.router.navigate(['/home']);
      }).catch(err => {
        console.log(err);
      });
  }
}
