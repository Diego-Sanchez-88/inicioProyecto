import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-perfil-username',
  templateUrl: './perfil-username.component.html',
  styleUrls: ['./perfil-username.component.css']
})
export class PerfilUsernameComponent implements OnInit {

  usuario: string;
  arrRelatosUsername: any[];

  constructor(private datosService: DatosService, private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.params.subscribe((params) => {
    // console.log(params)) // --> devuelve: {username: "elMendigo"}
    // });
    this.arrRelatosUsername = [];
  }

  ngOnInit() {
    // console.log(this.activatedRoute.params);
    // this.datosService.buscarPorUsername(this.activatedRoute.params)
    //   .then(response => {
    //     console.log(response);
    //   })
    this.activatedRoute.params.subscribe((params) => {
      // console.log(params.username);
      this.datosService.buscarPorUsername(params.username)
        .then(response => {
          console.log(response);
          this.usuario = response;
          this.arrRelatosUsername = response.relatos;
        });
    });
  }

  // gOnInit() {
  //   this.activatedRoute.params.subscribe((params) => {
  //     console.log(params.idEscritor);
  //     this.escritoresService.getById(parseInt(params.idEscritor))
  //       .then((escritor) => {
  //         this.esc = escritor;
  //       }).catch((mensaje) => {
  //         console.log(mensaje);
  //       });
  //   });

}
