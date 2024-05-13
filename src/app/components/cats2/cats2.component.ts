import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cats2',
  templateUrl: './cats2.component.html',
  styleUrl: './cats2.component.css'
})
export class Cats2Component {
  instructions: string = "People tamed cats some 10,000 years ago to help them protect the harvest. ";
  options: string[] = ["assets/images/games/option17.png", "assets/images/games/option18.png"];
  selectedOption: string = '';
  feedbackMessage: string = '';
  progressCounter: number = 1;
  showResponseMessage: boolean = false;

  constructor(private router: Router) {}

  selectOption(option: string) {
    console.log("Option sélectionnée :", option);

    this.selectedOption = option;
    if (option === 'assets/images/games/option17.png') {
      // Jouer le son correct
      let CorrectSound = new Audio();
      CorrectSound.src = "assets/sounds/correct.mp3"; // Chemin vers votre fichier audio d'erreur
      CorrectSound.load();
      CorrectSound.play();

      this.feedbackMessage = 'Good job!';
      this.progressCounter++;
      this.showResponseMessage = true;
      setTimeout(() => {
        this.router.navigate(['/cats3']);
      }, 2000);
    } else {
      console.log("Option incorrecte sélectionnée");

      // Jouer le son d'erreur
      let errorSound = new Audio();
      errorSound.src = "assets/sounds/error.mp3"; // Chemin vers votre fichier audio d'erreur
      errorSound.load();
      errorSound.play();

      this.feedbackMessage = 'Oops! Try again.';
    }
  }
  
  closePage() {
    this.router.navigate(['/natural-world']);
  }
}
