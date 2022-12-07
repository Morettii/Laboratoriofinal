import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url_backend = environment.url_backend+'/registroForm';
  constructor(
    private http:HttpClient
    ) { }
    crear_usuario3(datos:any){
      return this.http.post(`${this.url_backend+'/crear-usuario' }`,datos)
    }
    obtener_usuario3(){
      return this.http.get(`${this.url_backend+'/obtener-usuario' }`)
  

    }
}
