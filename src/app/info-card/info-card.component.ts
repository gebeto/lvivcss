import { Component, OnInit, Input } from '@angular/core';
import { DataCard } from '../data-card';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {
  @Input() data: DataCard;
  constructor() { }

  ngOnInit() {
  }

}
