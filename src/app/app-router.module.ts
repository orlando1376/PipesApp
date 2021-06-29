import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';

const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    // solo cuando el path está vacío se muestra
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    component: NumerosComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'ordenar',
    component: OrdenarComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ]
})
export class AppRouterModule { }
