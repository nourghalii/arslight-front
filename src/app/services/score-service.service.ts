import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreServiceService {
  score: number = 0;
  questions: string[] = [
    "Durant la lecture... Vous hésitez beaucoup et manquez de fluidité lors de la lecture.",
    "Durant la lecture... Vous pouvez lire et relire de nombreuses fois une phrase, ou même un paragraphe, sans le comprendre.",
    
    
    "Durant la lecture...Vous avez des difficultés pour comprendre un texte et le reformuler.",
    "Lors de l'écriture...Vous écrivez souvent comme vous entendez, sans tenir compte de l’orthographe. ",
    "Lors de l'écriture, Vous avez des difficultés à séparer correctement les mots les uns des autres.",
    
    
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
      return "Based on your responses, it appears that your experience of dyslexia is not severe. This means that while you may encounter challenges with reading, writing, and comprehension, these difficulties are likely manageable with the right support and strategies in place. It's important to recognize that dyslexia exists on a spectrum, and individuals with mild dyslexia often have strengths and abilities that can be harnessed to overcome challenges.Furthermore, dyslexia is not a reflection of intelligence or capability. Many successful individuals have dyslexia and have achieved great things by leveraging their unique strengths and talents. By embracing your strengths and seeking support when needed, you can navigate the challenges of dyslexia and thrive in various aspects of life, including education, career, and personal pursuits. Remember that you are not alone, and there are resources and communities available to support you on your journey with dyslexia."
    } else if (parfoisCount > jamaisCount && parfoisCount > tresSouventCount) {
      return "Based on your responses, it seems that the  severity appears to be mild. However, it's important to note that having dyslexia does not mean you are not intelligent or capable. Many individuals withdyslexia have unique strengths and talents in areas such as problem-solving, creativity, and thinking outside the box.Since your dyslexia appears to be mild, there are various exercises and strategies that can help improve your reading and writing skills.With the right support and strategies in place, you can overcome the challenges associated with dyslexia and thrive academically and personally. Remember that everyone's journey with dyslexia is unique, and there is no one-size-fits-all approach to managing it.";
    } else {
      return "Based on your responses, it seems that your experience of dyslexia may be more severe. Severe dyslexia can present significant challenges in reading, writing, and comprehension, impacting various aspects of daily life, including academic performance, professional endeavors, and self-confidence.Individuals with severe dyslexia may struggle to decode words, recognize familiar patterns, and comprehend written text, leading to frustration and discouragement. These challenges can extend beyond academic settings and affect interpersonal relationships, self-esteem, and overall quality of life.However, it's important to remember that dyslexia is not indicative of intelligence or potential. Many individuals with severe dyslexia possess unique strengths, such as creativity, problem-solving abilities, and resilience, that can be nurtured and celebrated.Seeking appropriate support and interventions is crucial for managing severe dyslexia."
    }
  }
}