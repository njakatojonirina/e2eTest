import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcceuilService {
  private apiUrl = 'https://api.practitest.com/api/v2/projects/{project_id}/runs/{run_id}/results';
  private apiKey = 'VOTRE_CLE_API';

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
