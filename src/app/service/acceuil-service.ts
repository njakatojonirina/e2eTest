import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcceuilService {
  private apiUrl = 'https://api.practitest.com/api/v2/projects/30786/runs';
  private apiKey = 'ce4752a1a0cf8fe2855ce4f1473fee388e4cbcd3'; 

  constructor(private http: HttpClient) {}

  sendTestResults(): Observable<any> {
    const headers = new HttpHeaders({
      'PTToken': this.apiKey, 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    console.log(this.http.get(this.apiUrl, { headers }));
    
    return this.http.post(this.apiUrl, { headers });
  }
}
