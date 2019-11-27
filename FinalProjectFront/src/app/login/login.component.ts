import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private datosService: DatosService) { }

  ngOnInit() {
  }

  // onSubmit(formValue) {
  //   // console.log(formvValue);

  // }
}

