import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DataCard } from '../data-card';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoCardComponent {
  @Input() data: DataCard;
}
