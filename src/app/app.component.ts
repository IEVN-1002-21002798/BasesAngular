import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //nombre que se le asigna al componente
  styleUrl: './app.component.css'
})


//Decorador tres areas principales el selector hacemos treferencia en el proyecto ae
export class AppComponent {
  title = 'baseAngular';

  dobleNumero(x:number):number{
    return x*2;
  }

  alumno={
    nombre: 'Juan',
    edad: 25,
    curso: 'Angular',
    fechaInscrito: new Date(),
    pago: 2220
  }
}
