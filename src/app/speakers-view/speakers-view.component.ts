import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataCard } from '../data-card';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { FirestoreService } from '../firebase.service';

@Component({
  selector: 'app-speakers-view',
  templateUrl: './speakers-view.component.html',
  styleUrls: ['./speakers-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakersViewComponent implements OnDestroy, OnInit {
  readonly iDie: Subject<any> = new Subject();
  readonly speakers: Observable<DataCard[]> = this.firestoreService.speakers.pipe(
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
    readonly firestoreService: FirestoreService
  ) { }

  ngOnDestroy() {
    this.iDie.next();
    this.iDie.complete();
  }

  ngOnInit() {
    this.all.subscribe(x => console.log(x));
  }

  trackBy(__, { title }) { return title; }
}
