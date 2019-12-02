import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  baseUrl: string;
  baseUrlNewText: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuario/registro';
    this.baseUrlNewText = 'http://localhost:3000/api/relato/relatoGuardado';
  }

  nuevoUsuario(values): Promise<any> {
    return this.http.post(this.baseUrl, values).toPromise();
  }

  nuevoRelato(values): Promise<any> {
    return this.http.post(this.baseUrlNewText, values).toPromise();
  }

}
