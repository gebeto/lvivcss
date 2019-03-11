import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { DataCard } from '../data-card';
import { takeUntil, map } from 'rxjs/operators';
import { FirestoreService } from '../firebase.service';

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
export class IndexViewComponent {
  readonly iDie: Subject<any> = new Subject();
  readonly speakers: Observable<DataCard[]> = this.firestoreService.speakers.pipe(
    map(all => all.filter(({ exclusive }) => exclusive))
  );

  readonly features: FeatureInfo[] = [
    { count: '20+', title: 'доповідачів' },
    { count: '2', title: 'дні' },
    { count: '3', title: 'воркшопи' },
    { count: '∞', title: 'задоволення' }
  ];
  constructor(
    readonly router: Router,
    readonly firestoreService: FirestoreService
  ) { }
  goToTickets() {
    this.router.navigateByUrl('tickets');
  }
  goToSponsor() {
    window.location.href = 'http://global-css.org/lvivcss-2018-partnership/en';
  }
}
