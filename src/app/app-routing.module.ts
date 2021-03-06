import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';


const routes: Routes = [
  {
    path: 'lista',
    component: ListaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// This is the routing module
export class AppRoutingModule {
}
