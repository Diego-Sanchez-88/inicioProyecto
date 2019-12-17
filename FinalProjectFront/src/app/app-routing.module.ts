import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LeerRelatosComponent } from './leer-relatos/leer-relatos.component';
import { EditPerfPruebaComponent } from './edit-perf-prueba/edit-perf-prueba.component';
import { RegistroUsuario2Component } from './registro-usuario2/registro-usuario2.component';
import { RelatoNuevoComponent } from './relato-nuevo/relato-nuevo.component';
import { AcordeonRelatosComponent } from './acordeon-relatos/acordeon-relatos.component';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: MenuComponent },
  { path: 'home', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'perfil', component: PerfilComponent, children: [
      { path: 'nuevo', component: RelatoNuevoComponent },
      { path: 'relatos', component: AcordeonRelatosComponent }
    ]
  },
  { path: 'leer-relatos', component: LeerRelatosComponent },
  { path: 'edit-perf-prueba', component: EditPerfPruebaComponent },
  { path: 'registro-usuario2', component: RegistroUsuario2Component },
  { path: 'eliminar-usuario', component: EliminarUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
