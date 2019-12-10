import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DatosService } from '../datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relato-nuevo',
  templateUrl: './relato-nuevo.component.html',
  styleUrls: ['./relato-nuevo.component.css']
})
export class RelatoNuevoComponent implements OnInit {

  formulario: FormGroup;

  constructor(private datosService: DatosService, private router: Router) {
    this.formulario = new FormGroup({
      titulo: new FormControl(''),
      texto: new FormControl(''),
      etiquetas: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.datosService.nuevoRelato(this.formulario.value)
      .then(res => {
        this.router.navigate(['/perfil']);
      });
  }
}
