import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../intefaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Mujer maravilla',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  cambiarOrden(value: string) {
    this.ordenarPor = value;
  }
}
