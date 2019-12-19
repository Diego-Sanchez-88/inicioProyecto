import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leer-relatos',
  templateUrl: './leer-relatos.component.html',
  styleUrls: ['./leer-relatos.component.css']
})
export class LeerRelatosComponent implements OnInit {

  arrRelatos: any[];

  constructor(private datosService: DatosService, private router: Router) {
    this.arrRelatos = [];
  }

  ngOnInit() {
    this.datosService.getAllRelatos()
      .then(response => {
        // console.log(response); // --> funciona en el terminal web
        this.arrRelatos = response;
        // console.log(response);
      });
  }

  subirArriba() {
    // alert('sí o no');
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  onSubmitGenero(value) {
    // console.log('value'); // el botoncito funciona, pero no devuelve nada.
    // console.log(value); // ahora sí devuelve lo que debe.
    this.datosService.buscarPorGenero(value)
      .then(response => {
        // console.log(response); // funciona, devuelve un objeto
        this.arrRelatos = response;
      });
  }

  onSubmitUsername(value) {
    // console.log('clicka?'); // sí clicka
    // console.log(value); // --> devuelve json vacío
    this.router.navigate(['/perfil-username', value.username]);
  }

}
