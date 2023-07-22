import { Component } from '@angular/core';

@Component({
  selector: 'app-dir-ng-model',
  templateUrl: './dir-ng-model.component.html',
  styleUrls: ['./dir-ng-model.component.css']
})
export class DirNgModelComponent {
  title = 'dirNgModel';
  nombre = '';
  nombre2 = '';
  cambiaNombre() {
    this.nombre = this.nombre.toLowerCase();
    this.nombre2 = this.nombre.toUpperCase();
  }
  cambiaNombre2() {
    this.nombre2 = this.nombre2.toUpperCase();
    this.nombre = this.nombre2.toLowerCase();
  }
}
