import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  baseUrl: string;
  baseUrlNewText: string;
  baseUrlLogin: string;
  baseUrlRelatos: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuario/registro';
    this.baseUrlNewText = 'http://localhost:3000/api/relato/nuevo';
    this.baseUrlLogin = 'http://localhost:3000/api/usuario/login';
    this.baseUrlRelatos = 'http://localhost:3000/relatos';
  }

  nuevoUsuario(values): Promise<any> {
    return this.http.post(this.baseUrl, values).toPromise();
  }

  nuevoRelato(values): Promise<any> {
    return this.http.post(this.baseUrlNewText, values).toPromise();
  }

  loginUsuario(values) {
    // console.log(values);
    return this.http.post(this.baseUrlLogin, values).toPromise();
  }

  getAllRelatos(): Promise<any[]> {
    return this.http.get<any[]>(this.baseUrlRelatos).toPromise();
  }
}
