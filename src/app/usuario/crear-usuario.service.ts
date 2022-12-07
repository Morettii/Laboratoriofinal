import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService {
  url_backend = environment.url_backend+'/registroForm';
  constructor(
    private http:HttpClient
  ) { }
}
