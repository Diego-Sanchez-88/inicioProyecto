import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeerRelatosComponent } from './leer-relatos/leer-relatos.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RelatoNuevoComponent } from './relato-nuevo/relato-nuevo.component';
import { AcordeonRelatosComponent } from './acordeon-relatos/acordeon-relatos.component';
import { EditPerfPruebaComponent } from './edit-perf-prueba/edit-perf-prueba.component';
import { RegistroUsuario2Component } from './registro-usuario2/registro-usuario2.component';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LeerRelatosComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PerfilComponent,
    RelatoNuevoComponent,
    AcordeonRelatosComponent,
    EditPerfPruebaComponent,
    RegistroUsuario2Component,
    EliminarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
