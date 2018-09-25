import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataCard } from './data-card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  readonly speakers: Observable<DataCard[]> = this.firestore
    .collection<DataCard>('/speakers')
    .valueChanges();

  readonly partners: Observable<DataCard[]> = this.firestore
    .collection<DataCard>('/partners')
    .valueChanges();

  constructor(
    readonly firestore: AngularFirestore
  ) {
  }
}
