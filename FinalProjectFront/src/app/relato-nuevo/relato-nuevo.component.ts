import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-relato-nuevo',
  templateUrl: './relato-nuevo.component.html',
  styleUrls: ['./relato-nuevo.component.css']
})
export class RelatoNuevoComponent implements OnInit {

  formulario: FormGroup;

  constructor(private datosService: DatosService) {
    this.formulario = new FormGroup({
      titulo: new FormControl(''),
      texto: new FormControl(''),
      etiquetas: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    // console.log(this.formulario.value);
    this.datosService.nuevoUsuario(this.formulario.value);
  }
}
