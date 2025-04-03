import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcceuilService } from './service/acceuil-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AcceuilService]
})
export class AppComponent implements OnInit {
  constructor(private acceuilService: AcceuilService) {}
  title = 'end2endtest';
  ngOnInit(): void {
    const report = {
      status: 'success',
      tests: [
        { name: 'Test d’accueil', result: 'passed' }
      ]
    };

    this.acceuilService.sendTestResults(report).subscribe({
      next: response => console.log('Rapport envoyé', response),
      error: err => console.error('Erreur lors de l’envoi', err)
    });
  }
}
