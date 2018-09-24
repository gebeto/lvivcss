import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataCard } from '../data-card';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-speakers-view',
  templateUrl: './speakers-view.component.html',
  styleUrls: ['./speakers-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakersViewComponent implements OnDestroy {
  readonly iDie: Subject<any> = new Subject();
  readonly speakers: Observable<DataCard[]> = this.firestore
    .collection<DataCard>('/speakers')
    .valueChanges()
    .pipe(
      takeUntil(this.iDie)
    );

  readonly exclusive: Observable<DataCard[]> = this.speakers.pipe(
    map(all => all.filter(({ exclusive }) => exclusive))
  );

  readonly all: Observable<DataCard[]> = this.speakers.pipe(
    map(
      all => all.filter(({ exclusive, hidden }) => !exclusive && !hidden)
    )
  );

  constructor(
    readonly firestore: AngularFirestore
  ) { }

  ngOnDestroy() {
    this.iDie.next();
    this.iDie.complete();
  }

  trackBy(__, { title }) { return title; }
}
