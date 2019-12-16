import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-leer-relatos',
  templateUrl: './leer-relatos.component.html',
  styleUrls: ['./leer-relatos.component.css']
})
export class LeerRelatosComponent implements OnInit {

  arrRelatos: any[];

  constructor(private datosService: DatosService) {
    this.arrRelatos = [];
  }

  ngOnInit() {
    this.datosService.getAllRelatos()
      .then(response => {
        // console.log(response); // --> funciona en el terminal web
        this.arrRelatos = response;
        // console.log(response);
        this.arrRelatos.unshift([response]);
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

}
