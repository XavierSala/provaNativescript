import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
var dialogs = require("ui/dialogs");

@Component({
  selector: 'app-principal',
  moduleId: module.id,
  templateUrl: `./principal.component.html`,
  styleUrls: [ './principal.component.css']
})
export class PrincipalComponent {

  nom: string

  constructor(
    private router: RouterExtensions ) {
    this.nom = "Filomeno";
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

          this.router.navigate(["/seguent"], {clearHistory: false})

        } else {
          console.log("Ha dit que no");
        }
    })
  }

}