import { Component, OnInit } from '@angular/core';
import { ScoreServiceService } from '../../../services/score-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {
  question: string = '';
  question2: string = '';

  options: string[] = ['Jamais', 'Parfois', 'Très souvent'];
  selectedOption: string = '';
  currentQuestionId: number = 1;

  constructor(private router: Router, private route: ActivatedRoute, private scoreService: ScoreServiceService) { }

  ngOnInit(): void {
    // Récupérer l'ID de la question à partir de l'URL
    this.route.params.subscribe(params => {
      this.currentQuestionId = +params['id']; // Convertir l'ID en nombre
      // Accéder à la question correspondante dans le service ScoreServiceService
      this.question = this.scoreService.questions[this.currentQuestionId - 1]; // -1 car les indices de tableau commencent à 0
    });
  }
  answerQuestion(option: string) {

    this.selectedOption = option;
    let score = this.calculateScore(option);
    this.scoreService.updateScore(score);

    // Ajouter l'option sélectionnée à la liste des options sélectionnées
    this.scoreService.selectedOptions.push(option);

    // Vérifier si c'est la dernière question
    if (this.currentQuestionId === this.scoreService.questions.length) {
      // Évaluer le résultat en utilisant toutes les options sélectionnées
      let result = this.scoreService.evaluateResult(this.scoreService.selectedOptions);

      // Naviguer vers l'interface de résultat
      this.router.navigate(['/result'], { state: { result: result } });
    } else {
      // Naviguer vers la prochaine question
      this.router.navigate(['/question', this.currentQuestionId + 1]);
    }
  }

  calculateScore(option: string): number {
    switch (option) {
      case 'Jamais':
        return 0;
      case 'Parfois':
        return 1;
      case 'Très souvent':
        return 2;
      default:
        return 0;
    }
  }

  getQuestionText(questionId: number): string {
    // Logique pour obtenir le texte de la question en fonction de l'identifiant de la question
    return `Question ${questionId}`;
  }


  
}