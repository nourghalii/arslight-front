import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-game1',
  templateUrl: './test-game1.component.html',
  styleUrls: ['./test-game1.component.css'] // Utilisez styleUrls au lieu de styleUrl
})
export class TestGame1Component {
  instructions: string = "Hi! Steam and his friend Michal are here! We will help you learn more about dogs.";
  imageUrl: string = "assets/images/games/game1.png";
  options: string[] = ["assets/images/games/option1.png", "assets/images/games/option2.png"];
  selectedOption: string = '';
  feedbackMessage: string = '';
  progressCounter: number = 0; // Initialiser le compteur de progression à 0
  showResponseMessage: boolean = false;


  constructor(private router: Router) {}


  selectOption(option: string) {
    console.log('Option selected:', option);
    this.selectedOption = option;
    this.feedbackMessage = ''; // Réinitialiser le message de rétroaction
  
    // Vérifier si une option a été sélectionnée
    if (this.selectedOption) {

      // Jouer le son correct
      let CorrectSound = new Audio();
      CorrectSound.src = "assets/sounds/correct.mp3"; // Chemin vers votre fichier audio d'erreur
      CorrectSound.load();
      CorrectSound.play();
      this.progressCounter++;
      this.showResponseMessage = true;
      setTimeout(() => {
        console.log('Redirecting to next interface...');
        this.router.navigate(['/test-game2']);
      }, 2000);
    } else {
      console.log('Incorrect answer selected.'); // Vérifiez si l'option incorrecte est sélectionnée
    }
  }
  

  

  

  closePage() {
    // Mettez ici le code pour fermer la page, par exemple :
    this.router.navigate(['/natural-world']); // Rediriger vers la page d'accueil
  }


}


