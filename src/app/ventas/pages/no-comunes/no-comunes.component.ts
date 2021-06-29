import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre: string = 'Orlando';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Orlando', 'Monica', 'Aldair', 'Luna'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  // KeyValue
  persona = {
    nombre: 'Orlando',
    edad: 50,
    direccion: 'Bogotá, Colombia'
  }

  // Json
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async
  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos de la promesa');
    }, 3500);
  });

  constructor() { }

  ngOnInit(): void {
  }

  cambiarCliente() {
    this.nombre = 'Monica';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

}
