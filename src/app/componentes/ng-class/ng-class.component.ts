import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  title = 'dirNgClass';
  fondoAmarillo = false;
  letraGrande = false;
  checkFondo() {
    this.fondoAmarillo = !this.fondoAmarillo;
  }
  checkLetra() {
    this.letraGrande = !this.letraGrande;
  }
  asignaClases() {
    let classes = {
      fa: this.fondoAmarillo,
      lg: this.letraGrande
    };
    return classes;
  }

}
