import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharactersService } from '../../services/characters.service'; // Ajustez le chemin selon votre structure de répertoire


@Component({
  selector: 'app-parrot1',
  template: '<button (click)="test()">Test Communication</button>',

  
})
export class Parrot1Component {
  constructor(private characterService: CharactersService) {}

  test() {
    this.characterService.testCommunication().subscribe(
      response => {
        console.log('Response from Django:', response);
        // Vous pouvez également effectuer d'autres actions ici en fonction de la réponse reçue
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}