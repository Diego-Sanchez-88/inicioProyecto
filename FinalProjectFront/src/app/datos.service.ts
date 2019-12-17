import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  baseUrl: string;
  baseUrlRelatos: string;


  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/';
    // this.baseUrl = 'http://localhost:3000/api/usuario/registro';
    // this.baseUrlNewText = 'http://localhost:3000/api/relato/nuevo';
    // this.baseUrlLogin = 'http://localhost:3000/api/usuario/login';
    this.baseUrlRelatos = 'http://localhost:3000/relatos';
    // this.baseUrlUsuarioRelatos = 'http://localhost:3000/api/usuario/relatos';
  }

  nuevoUsuario(values): Promise<any> {
    return this.http.post(`${this.baseUrl}usuario/registro`, values).toPromise();
  }

  nuevoRelato(values): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('user-token')
      })
    };
    return this.http.post(`${this.baseUrl}relato/nuevo`, values, httpOptions).toPromise();
  }

  loginUsuario(values) {
    // console.log(values);
    return this.http.post(`${this.baseUrl}usuario/login`, values).toPromise();
  }

  getAllRelatos(): Promise<any[]> {
    return this.http.get<any[]>(this.baseUrlRelatos).toPromise();
  }

  getRelatosUsuario(): Promise<any> {
    // console.log(`${this.baseUrl}usuario/relatos`);
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('user-token')
      })
    };
    return this.http.get<any>(`${this.baseUrl}usuario/relatos`, httpOptions).toPromise();
  }

  getUsuario(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('user-token')
      })
    };
    return this.http.get<any>(`${this.baseUrl}usuario`, httpOptions).toPromise();
  }

  borrarRelato(pRelatoId): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('user-token')
      })
    };
    return this.http.post(`${this.baseUrl}relato/borrar`, { id: pRelatoId }, httpOptions).toPromise();
  }

  getUsuarioActualizado(values): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('user-token')
      })
    };
    return this.http.post<any>(`${this.baseUrl}usuario/update`, values, httpOptions).toPromise();
  }

  eliminarUsuario(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': localStorage.getItem('user-token')
      })
    };
    return this.http.post<any>(`${this.baseUrl}usuario/eliminar`, httpOptions).toPromise();
  }
}





