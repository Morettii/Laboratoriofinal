import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObtenerUsuariosService {
  url_backend = environment.url_backend+'/registroForm';
  constructor(
    private http:HttpClient
  ) { }
  crear_usuario2(datos:any){
    return this.http.post(`${this.url_backend+'/crear-usuario' }`,datos)
  }
  obtener_usuario2(){
    return this.http.get(`${this.url_backend+'/obtener-usuario' }`)
}

}