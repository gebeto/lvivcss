import { Component, ChangeDetectionStrategy } from '@angular/core';
import { speakers } from '../speakers.list';

@Component({
  selector: 'app-speakers-view',
  templateUrl: './speakers-view.component.html',
  styleUrls: ['./speakers-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakersViewComponent {
  readonly speakers = {
    ...{ exclusive: speakers.exclusive },
    ...{ speakers: speakers.speakers.filter(({ hidden }) => !hidden) }
  };
}
