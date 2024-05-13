import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeechToTextService {

  constructor(private http: HttpClient) { }

  speechToText(audioFile: File, language: string): Observable<any> {
    const formData = new FormData();
    formData.append('audio', audioFile);

    let url: string;
    if (language === 'fr') {
      url = 'http://localhost:8000/speech_to_text/';
    } else if (language === 'ar') {
      url = 'http://localhost:8000/speech_to_text_ar/';
    } 
    else if (language === 'ang') { // Utiliser 'ang' pour l'anglais
      url = 'http://localhost:8000/speech_to_text_ang/';
    } 
    else {
      // Si la langue spécifiée n'est pas supportée, renvoyer une erreur
      return throwError(`Unsupported language: ${language}`);
    }

    return this.http.post<any>(url, formData);
}

}