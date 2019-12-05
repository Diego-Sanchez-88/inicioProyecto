import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private datosService: DatosService, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      edad: new FormControl(''),
      generos: new FormControl(''),
      message: new FormControl(''),
      password: new FormControl('')
    });
  }
  ngOnInit() {
  }

  onSubmit() {
    // console.log(this.formulario.value); // --> funciona en terminal navegador
    this.datosService.nuevoUsuario(this.formulario.value)
      .then(res => {
        this.router.navigate(['/login']);
      });
  }
}
