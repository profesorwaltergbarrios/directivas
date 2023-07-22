import { Component } from '@angular/core';

@Component({
  selector: 'app-dir-ng-for',
  templateUrl: './dir-ng-for.component.html',
  styleUrls: ['./dir-ng-for.component.css']
})
export class DirNgForComponent {
  title = 'dirNgFor';
  public nombres = [
    { nom: "uno", edad: 10 },
    { nom: "dos", edad: 20 },
    { nom: "tres", edad: 30 }
  ];
}
