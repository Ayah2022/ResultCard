import { Component } from '@angular/core';
import { ResultCardComponent } from './components/result-card/result-card.component';
// import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [
    ResultCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
