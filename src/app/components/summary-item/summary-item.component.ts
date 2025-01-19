import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-item',
  imports: [],
  templateUrl: './summary-item.component.html',
  styleUrl: './summary-item.component.scss'
})
export class SummaryItemComponent {
  @Input() title!: string; 
  @Input() score!: number; 
  @Input() iconSrc!: string; 
  @Input() customClass!: string;
}
