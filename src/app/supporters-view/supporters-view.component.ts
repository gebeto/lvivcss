import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataCard } from '../data-card';
import { supporters } from './supporters';
import { map } from 'rxjs/operators';

const source: BehaviorSubject<DataCard[]> = new BehaviorSubject(supporters);

@Component({
  selector: 'app-supporters-view',
  templateUrl: './supporters-view.component.html',
  styleUrls: ['./supporters-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportersViewComponent {
  readonly element$: Observable<DataCard[]> = source.pipe(
    map(data => data.filter(item => item.status === 'element'))
  );

  readonly classname$: Observable<DataCard[]> = source.pipe(
    map(data => data.filter(item => item.status === 'classname'))
  );

  readonly id$: Observable<DataCard[]> = source.pipe(
    map(data => data.filter(item => item.status === 'id'))
  );

  readonly inline$: Observable<DataCard[]> = source.pipe(
    map(data => data.filter(item => item.status === 'inline'))
  );
}
