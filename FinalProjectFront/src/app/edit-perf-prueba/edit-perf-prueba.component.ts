import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-perf-prueba',
  templateUrl: './edit-perf-prueba.component.html',
  styleUrls: ['./edit-perf-prueba.component.css']
})
export class EditPerfPruebaComponent implements OnInit {

  formulario: FormGroup;

  constructor(private datosService: DatosService, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]),
      edad: new FormControl('', [Validators.required]),
      password: new FormControl(''),
      nuevaPassword: new FormControl(''),
      repiteNuevaPassword: new FormControl('')
    },
      [this.passwordValidator]);
  }

  ngOnInit() {
  }

  onSubmit() {
    // console.log(this.formulario.value); // --> correcto. Devuelve los datos de los campos.
    this.datosService.getUsuarioActualizado(this.formulario.value)
      .then(res => {
        // console.log(res);
        this.router.navigate(['/perfil']);
      });
  }

  passwordValidator(form: FormGroup) {
    const passwordActual = form.controls['passwordActual']
    const passwordControl = form.controls['nuevaPassword'];
    const repitePasswordControl = form.controls['repiteNuevaPassword'];

    if (passwordControl.value === repitePasswordControl.value) {
      return null;
    } else {
      return { passwordvalidator: true };
    }
  }

}
