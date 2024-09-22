import { Component } from '@angular/core';
import { PORTFOLIO_SECTIONS } from './portfolio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  readonly portfolioSections = PORTFOLIO_SECTIONS;
}
