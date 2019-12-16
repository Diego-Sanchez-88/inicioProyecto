import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario2',
  templateUrl: './registro-usuario2.component.html',
  styleUrls: ['./registro-usuario2.component.css']
})
export class RegistroUsuario2Component implements OnInit {

  formulario: FormGroup;

  constructor(private datosService: DatosService, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      edad: new FormControl('', [Validators.required]),
      // generos: new FormControl(''),
      message: new FormControl(''),
      password: new FormControl(''),
      repite_password: new FormControl(''),
    },
      [this.passwordValidator]
    );
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

  passwordValidator(form: FormGroup) {
    const passwordControl = form.controls['password'];
    const repitePasswordControl = form.controls['repite_password'];

    if (passwordControl.value === repitePasswordControl.value) {
      return null;
    } else {
      return { passwordvalidator: true };
    }
  }
}
