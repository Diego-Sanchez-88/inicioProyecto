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
      nuevoNombre: new FormControl('', [Validators.required]),
      nuevoUsername: new FormControl('', [Validators.required]),
      nuevoEmail: new FormControl('', [Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]),
      nuevaEdad: new FormControl('', [Validators.required]),
      passwordActual: new FormControl(''),
      nuevaPassword: new FormControl(''),
      repiteNuevaPassword: new FormControl('')
    },
      [this.passwordValidator]);
  }

  ngOnInit() {
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
