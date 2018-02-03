import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-seguent',
  // Poso la ruta perquè no calgui el moduleId
  templateUrl: `seguent/seguent.component.html`
})
export class SeguentComponent {

  constructor(private router: RouterExtensions) {

  }

  tornar() {
    console.log("Anar a la pàgina d'abans");
    this.router.back();
  }
}