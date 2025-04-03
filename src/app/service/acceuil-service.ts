import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcceuilService {
  private apiUrl = 'https://api.practitest.com/api/v2/projects/30786/runs/16759823/results';
  private apiKey = '174455332004913c56652903e723bb4e715b4d77';

  constructor(private http: HttpClient) {}

  sendTestResults(results: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });
    const payload = { test_results: results };
    return this.http.post(this.apiUrl, payload, { headers });
  }
}
