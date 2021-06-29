import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PipesApp';

  constructor ( private primeNGConfig: PrimeNGConfig ) {}

  ngOnInit() {
    // para el efecto de la la burbuja en p-fieldset (no-comunes.component.html) al hacer click
    this.primeNGConfig.ripple = true;
  }

}
