import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cats3',
  templateUrl: './cats3.component.html',
  styleUrl: './cats3.component.css'
})
export class Cats3Component {
  instructions: string = "How many mice are running to the right ?";
  imageUrl: string = "assets/images/games/game3.png";
  options: string[] = ["assets/images/games/option19.png", "assets/images/games/option20.png", "assets/images/games/option21.png"];
  selectedOption: string = '';
  feedbackMessage: string = '';
  progressCounter: number = 2;
  showResponseMessage: boolean = false;

  constructor(private router: Router) {}

  selectOption(option: string) {
    console.log("Option sélectionnée :", option);

    this.selectedOption = option;
    if (option === 'assets/images/games/option19.png') {
      // Jouer le son correct
      let CorrectSound = new Audio();
      CorrectSound.src = "assets/sounds/correct.mp3"; // Chemin vers votre fichier audio d'erreur
      CorrectSound.load();
      CorrectSound.play();

      this.feedbackMessage = 'Good job!';
      this.progressCounter++;
      this.showResponseMessage = true;
      setTimeout(() => {
        this.router.navigate(['/test-game3']);
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
