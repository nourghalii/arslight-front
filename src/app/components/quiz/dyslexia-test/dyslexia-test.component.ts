import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreServiceService } from '../../../services/score-service.service';
@Component({
  selector: 'app-dyslexia-test',
  templateUrl: './dyslexia-test.component.html',
  styleUrl: './dyslexia-test.component.css'
})
export class DyslexiaTestComponent {
  currentStep: string = 'question';

  constructor(private router: Router, private scoreService: ScoreServiceService) { }

  ngOnInit(): void {
  }

  showResult() {
    this.router.navigate(['/result']);
  }
}