import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginIncorrecto: boolean;

  constructor(private datosService: DatosService) {
    this.loginIncorrecto = false;
  }

  ngOnInit() {
  }

  onSubmit(values) {
    // console.log(values); // funciona en el terminal de navegador
    this.datosService.loginUsuario(values)
      // console.log(values);
      .then((res) => {
        console.log(res);
      });
  }
}

