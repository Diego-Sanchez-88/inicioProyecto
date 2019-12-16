import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginIncorrecto: boolean;

  constructor(private datosService: DatosService, private router: Router) {
    this.loginIncorrecto = false;
  }

  ngOnInit() {
  }

  onSubmit(values) {
    // console.log(values); // funciona en el terminal de navegador
    this.datosService.loginUsuario(values)
      // console.log(values);
      .then((res) => {
        // console.log(res);
        if (res['error']) {
          alert(res['error']);
        } else {
          localStorage.setItem('user-token', res['success']);
          // alert('login correcto');
          this.router.navigate(['/perfil/relatos']);
        }
      }).catch(err => {
        console.log(err);
      });
  }
}


