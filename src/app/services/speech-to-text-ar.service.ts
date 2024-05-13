import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpeechToTextArService {
  constructor(private http: HttpClient) { }

  // Méthode pour envoyer le fichier audio au serveur Django et récupérer le texte converti
  speechToText(audioFile: File) {
   const formData = new FormData();
   formData.append('audio', audioFile);
 
   return this.http.post<any>('http://localhost:8000/speech_to_text_ar/', formData);
 }
 }