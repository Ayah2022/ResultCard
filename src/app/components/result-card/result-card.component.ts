import { Component } from '@angular/core';
import { SummaryItemComponent } from '../summary-item/summary-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-card',
  imports: [SummaryItemComponent,CommonModule],
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.scss'
})
export class ResultCardComponent {
resultArray=[
  {
    "category": "Reaction",
    "score": 80,
    "icon": "assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "assets/images/icon-visual.svg"
  }
]

}
