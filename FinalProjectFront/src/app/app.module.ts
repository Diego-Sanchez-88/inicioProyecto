import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { SubirRelatoComponent } from './subir-relato/subir-relato.component';
import { LeerRelatosComponent } from './leer-relatos/leer-relatos.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RelatoNuevoComponent } from './relato-nuevo/relato-nuevo.component';
import { AcordeonRelatosComponent } from './acordeon-relatos/acordeon-relatos.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    SubirRelatoComponent,
    LeerRelatosComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PerfilComponent,
    RelatoNuevoComponent,
    AcordeonRelatosComponent
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
