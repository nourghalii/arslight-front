import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cats1',
  templateUrl: './cats1.component.html',
  styleUrl: './cats1.component.css'
})
export class Cats1Component {
  instructions: string = "Hi! Steam and his friend Lily are here! We will help you learn more about cats.";
  imageUrl: string = "assets/images/games/game2.png";
  options: string[] = ["assets/images/games/option15.png", "assets/images/games/option16.png"];
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
        this.router.navigate(['/cats2']);
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


