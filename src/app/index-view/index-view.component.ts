import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { speakers } from '../speakers.list';

interface FeatureInfo {
  count: string;
  title: string;
}

@Component({
  selector: 'app-index-view',
  templateUrl: './index-view.component.html',
  styleUrls: ['./index-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexViewComponent implements OnInit {
  readonly features: FeatureInfo[] = [
    { count: '20+', title: 'speakers' },
    { count: '400', title: 'attendees' },
    { count: '4', title: 'workshops' },
    { count: 'Infinite', title: 'fun' }
  ];
  readonly speakers = speakers;
  constructor() { }

  ngOnInit() {
  }

  trackBy() {}
}
