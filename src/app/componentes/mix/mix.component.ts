import { Component } from '@angular/core';

@Component({
  selector: 'app-mix',
  templateUrl: './mix.component.html',
  styleUrls: ['./mix.component.css']
})
export class MixComponent {
  title = 'mix';
  mostrar = false;
  numeros: number[] = [1, 2, 3, 4, 5, 6];
  pares: boolean = true; impares: boolean = true;
  colorPar = 'blue'; colorImpar = 'red';
  clActividad(valor: boolean) {
    let classes = { activo: valor, inactivo: !valor };
    return classes;
  }
}
