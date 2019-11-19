import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { MenuComponent } from './menu/menu.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: MenuComponent },
  { path: 'home', component: MenuComponent },
  { path: 'registro-usuario', component: RegistroUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
