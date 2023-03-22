import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrenarComponent } from './componentes/entrenar/entrenar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  {path : '', redirectTo: 'inicio', pathMatch:'full'},
  {path: 'inicio', component:InicioComponent},
  {path: 'ejercicio', component:EntrenarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
