import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { DataCard } from '../data-card';
import { AngularFirestore } from '@angular/fire/firestore';
import { takeUntil, map } from 'rxjs/operators';

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
  readonly speakers: Observable<DataCard[]> = this.firestore
    .collection<DataCard>('/speakers', ref => ref.where('exclusive', '==', true))
    .valueChanges()
    .pipe(
      takeUntil(this.iDie)
    );

  readonly features: FeatureInfo[] = [
    { count: '20+', title: 'speakers' },
    { count: '400', title: 'attendees' },
    { count: '4', title: 'workshops' },
    { count: '∞', title: 'fun' }
  ];
  constructor(
    readonly router: Router,
    readonly firestore: AngularFirestore
  ) { }
  goToTickets() {
    this.router.navigateByUrl('tickets');
  }
  goToSponsor() {
    window.location.href = 'http://global-css.org/lvivcss-2018-partnership/en';
  }
}
