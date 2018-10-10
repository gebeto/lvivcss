import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil, map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { DataCard } from 'src/app/data-card';
import { FirestoreService } from 'src/app/firebase.service';

@Component({
  selector: 'app-topic-view',
  templateUrl: './topic-view.component.html',
  styleUrls: ['./topic-view.component.css']
})
export class TopicViewComponent implements OnDestroy {
  readonly iDie: Subject<any> = new Subject();

  readonly topics: Observable<{ name, topic, description }[]> = this.firestoreService.speakers.pipe(
    takeUntil(this.iDie),
    map(items => items.filter(({ topic }) => !!topic).map(item => ({
      name: item.title,
      topic: item.topic,
      description: item.description
    })))
  );
  constructor(
    readonly firestoreService: FirestoreService
  ) { }

  ngOnDestroy() {
    this.iDie.next();
    this.iDie.complete();
  }

}
