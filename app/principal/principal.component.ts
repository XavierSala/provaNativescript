import { Component } from '@angular/core';
var dialogs = require("ui/dialogs");

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
    alert("Hola " + this.nom);
  }

  onSeguent() {
    dialogs.confirm( {
      title: "Prova",
      message: this.nom + ", canviem de finestra ",
      okButtonText: "Si",
      cancelButtonText: "No"
    }).then(
      resultat => {
        if (resultat == true) {
          console.log("Ha dit que si");
        } else {
          console.log("Ha dit que no");
        }
    })
  }

}