// speech-to-text.component.ts
import { Component } from '@angular/core';
import { SpeechToTextService } from '../../services/speech-to-text.service';

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.css']
})
export class SpeechToTextComponent {
  audioFile: File | null = null;
  textResult: string | null = null;
  loading: boolean = false;
  selectedLanguage: string = 'fr'; // Par défaut, la langue choisie est le français

  constructor(private speechToTextService: SpeechToTextService) {
    this.selectedLanguage = 'fr'; // Initialiser selectedLanguage à 'fr'
  }

  onFileSelected(event: any) {
    this.audioFile = event.target.files[0];
  }

  onUpload() {
    if (this.audioFile && this.selectedLanguage) {
      this.loading = true;
      this.speechToTextService.speechToText(this.audioFile, this.selectedLanguage).subscribe(
        response => {
          this.textResult = response.text;
          this.loading = false;
        },
        error => {
          console.error('Error:', error);
          this.loading = false;
        }
      );
    }
  }

  updateSelectedLanguage(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue !== null && selectedValue !== undefined) {
      this.selectedLanguage = selectedValue;
    }
  }
  
  
}
