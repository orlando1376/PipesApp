import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'Orlando';
  nombreUpper: string = 'ORLANDO';
  nombreCompleto: string = 'orLando franCo Cespedes';
  fecha: Date = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}
