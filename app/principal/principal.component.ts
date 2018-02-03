import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  moduleId: module.id,
  templateUrl: `./principal.component.html`,
  styleUrls: [ './principal.component.css']
})
export class PrincipalComponent {

  nom: string

  constructor() {
    this.nom = "Hola";
  }

  onSaluda() {
    
  }

  onSeguent() {

  }

}