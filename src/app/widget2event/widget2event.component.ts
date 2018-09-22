import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-widget2event',
  templateUrl: './widget2event.component.html',
  styleUrls: ['./widget2event.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Widget2EventComponent {
  private readonly id = 1466074;
  @Input() private type = null;
  get url(): SafeUrl {
    return this.s.bypassSecurityTrustResourceUrl(`https://2event.com/site/ticketsWidget?id=${this.id}&bg_color=lime&tickets_type=${this.type}&target=_top&lang=en&frame=tickets_iframe_0&tickets=`);
  }
  constructor(readonly s: DomSanitizer) { }
}
