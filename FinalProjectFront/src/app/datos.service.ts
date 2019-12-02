import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuarios/:usuarioId';
  }

  nuevoUsuario(values): Promise<any> {
    return this.http.post(this.baseUrl, values).toPromise();
  }


}
