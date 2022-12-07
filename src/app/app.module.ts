import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EgresoComponent } from './formulario/egreso/egreso.component';
import { UsuarioComponent } from './formulario/usuario/usuario.component';
import { VerUsuariosComponent } from './ver-usuarios/ver-usuarios.component';
import { VerEgresoComponent } from './ver-egreso/ver-egreso.component';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    EgresoComponent,
    UsuarioComponent,
    VerUsuariosComponent,
    VerEgresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
