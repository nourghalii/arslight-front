import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreServiceService {
  score: number = 0;
  questions: string[] = [
    "Durant la lecture... Vous hésitez beaucoup et manquez de fluidité lors de la lecture.",
    "Durant la lecture... Vous pouvez lire et relire de nombreuses fois une phrase, ou même un paragraphe, sans le comprendre.",
    "Durant la lecture... Vous vous fatiguez très vite en lisant.interface suivante",
    "Durant la lecture...Vous n'aimez pas lire et évitez la lecture au maximum.",
    "Durant la lecture...Vous avez des difficultés pour comprendre un texte et le reformuler.",
    "Lors de l'écriture...Vous écrivez souvent comme vous entendez, sans tenir compte de l’orthographe. ",
    "Lors de l'écriture, Vous avez des difficultés à séparer correctement les mots les uns des autres.",
    "Lors de l'écriture ,Vous avez tendance à faire beaucoup de ratures",
    "Lors de l'écriture... Vous a du mal à vous relire ",
    "Lors de l'écriture... Vous avez tendance à inverser certaines lettres : b/p q/d",
    "A l'école... Vous avez du mal à apprendre de nouvelles compétences, en lisant un cours en ligne par exemple, et avez du mal à vous en souvenir. ",
    "A l'école...Vous pouvez ne pas comprendre des consignes en les lisant vous-même alors que vous les comprenez parfaitement lorsque quelqu’un lit le même texte à haute voix",
    "Vous êtes en difficulté dans les tâches où il est important de bien comprendre les textes que vous avez sous les yeux"



    // Ajoutez d'autres questions ici
  ];
  selectedOptions: string[] = []; // Stocke les options sélectionnées pour chaque question


  constructor() { }

  updateScore(value: number) {
    this.score += value;
  }

  resetScore() {
    this.score = 0;
  }
  evaluateResult(selectedOptions: string[]): string {
    let jamaisCount = 0;
    let parfoisCount = 0;
    let tresSouventCount = 0;

    for (let i = 0; i < selectedOptions.length; i++) {
      switch (selectedOptions[i]) {
        case 'Jamais':
          jamaisCount++;
          break;
        case 'Parfois':
          parfoisCount++;
          break;
        case 'Très souvent':
          tresSouventCount++;
          break;
      }
    }

    if (jamaisCount > parfoisCount && jamaisCount > tresSouventCount) {
      return "Dyslexia non sévère";
    } else if (parfoisCount > jamaisCount && parfoisCount > tresSouventCount) {
      return "Dyslexia moyenne";
    } else {
      return "Dyslexia sévère";
    }
  }
}