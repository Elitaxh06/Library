import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FraseService {
  constructor(private http: HttpClient) { }
  getFrase(){
    return this.http.get('https://frasedeldia.azurewebsites.net/api/phrase')
  }
}
