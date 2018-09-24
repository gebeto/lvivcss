import { Component } from '@angular/core';
import { FirestoreService } from '../firebase.service';
import { Observable } from 'rxjs';
import { DataCard } from '../data-card';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-partners-view',
  templateUrl: './partners-view.component.html',
  styleUrls: ['./partners-view.component.css']
})
export class PartnersViewComponent {
  private readonly partners: Observable<DataCard[]> = this.firestoreServide.partners;

  readonly media: Observable<DataCard[]> = this.partners.pipe(
    map(all => all.filter(({ status }) => status === 'media'))
  );

  readonly sponsors: Observable<DataCard[]> = this.partners.pipe(
    map(all => all.filter(({ status }) => status === 'sponsor'))
  );

  constructor(readonly firestoreServide: FirestoreService) { }

  goToSponsor() {
    window.location.href = 'http://global-css.org/lvivcss-2018-partnership/en';
  }
}
