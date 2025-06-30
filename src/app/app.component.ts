import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutTemplate } from '@core/template/layout/layout.template';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutTemplate],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FanturyLandingPage';
}
