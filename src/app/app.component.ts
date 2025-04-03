import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcceuilService } from './service/acceuil-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent implements OnInit{
  constructor(private acceuilService: AcceuilService) {}
  title = 'end2endtest';
  ngOnInit(): void {
    this.acceuilService.sendTestResults()
  }

}
