import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly notTicketsRoute$: Observable<boolean> = this.router.events
    .pipe(
      filter(e => e instanceof NavigationEnd),
      map((e: NavigationEnd) => e.url !== '/tickets')
    );
  constructor(
    readonly router: Router
  ) { }
}
