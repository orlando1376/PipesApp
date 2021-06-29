# PipesApp

Esta aplicación fue hecha para ayudar a entender el manejo de [Pipes](https://angular.io/api/core/Pipe) de [Angular](https://angular.io/).

También utilizamos [PrimeNG](https://primefaces.org/primeng) para hacer que la aplicación sea visualmente mas agradable.

## Instalación de [PrimeNG](https://primefaces.org/primeng)

Ejecutar el siguiente comando para instalar los paquetes `primeng` y `primeicons`

``` code
npm install primeng primeicons
```

Luego modifique el archivo `angular.json` y agrege los estilos de CSS en la sección styles

``` code
"styles": [
    "src/styles.css",
    "node_modules/primeicons/primeicons.css",
    "node_modules/primeng/resources/themes/vela-blue/theme.css",
    "node_modules/primeng/resources/primeng.min.css"
],
```

## [PrimeFlex](https://primefaces.org/primeng/showcase/#/primeflex)

PrimeFlex es una biblioteca de utilidades CSS que presenta varios ayudantes, como un sistema de cuadrícula, caja flexible, espaciado, elevación y más. Aunque no es necesario, se recomienda encarecidamente agregar PrimeFlex, ya que es probable que necesite dichas utilidades al desarrollar aplicaciones con PrimeNG.

`Instalación`

``` code
npm install primeflex --save
```

`Importar CSS`

Agregar primeflex.css al archivo `angular.json`

``` code
"styles": [
    "src/styles.css",
    "node_modules/primeflex/primeflex.css"
],
```

## Temas puntuales

- [Lowercase](https://angular.io/api/common/LowerCasePipe)
- [Uppercase](https://angular.io/api/common/UpperCasePipe)
- [Titlecase](https://angular.io/api/common/TitleCasePipe)
- [DatePipe](https://angular.io/api/common/DatePipe)
- [DecimalPipe](https://angular.io/api/common/DecimalPipe)
- [CurrencyPipe](https://angular.io/api/common/CurrencyPipe)
- [PercentPipe](https://angular.io/api/common/PercentPipe)
- [I18nSelectPipe](https://angular.io/api/common/I18nSelectPipe)
- [I18nPluralPipe](https://angular.io/api/common/I18nPluralPipe)
- [SlicePipe](https://angular.io/api/common/SlicePipe)
- [KeyValuePipe](https://angular.io/api/common/KeyValuePipe)
- [JsonPipe](https://angular.io/api/common/JsonPipe)
- [AsyncPipe](https://angular.io/api/common/AsyncPipe)
