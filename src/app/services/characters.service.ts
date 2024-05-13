import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private apiUrl = 'http://localhost:8000/api/test/';

  constructor(private http: HttpClient) { }

  testCommunication() {
    return this.http.get(this.apiUrl);
  }
}