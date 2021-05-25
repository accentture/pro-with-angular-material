import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './componentes/botones/botones.component';
import { TipografiaComponent } from './componentes/tipografia/tipografia.component';



const routes: Routes = [
  { path: 'tipografias', component:TipografiaComponent},
  { path: 'botones', component:BotonesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
