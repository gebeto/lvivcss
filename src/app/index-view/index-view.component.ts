import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { speakers } from '../speakers.list';
import { Router } from '@angular/router';

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
export class IndexViewComponent  {
  readonly features: FeatureInfo[] = [
    { count: '20+', title: 'speakers' },
    { count: '400', title: 'attendees' },
    { count: '4', title: 'workshops' },
    { count: '∞', title: 'fun' }
  ];
  readonly speakers = speakers;
  constructor(readonly router: Router) { }
  goToTickets() {
    this.router.navigateByUrl('tickets');
  }
  goToSponsor() {
    window.location.href = 'http://global-css.org/lvivcss-2018-partnership/en';
  }
}
