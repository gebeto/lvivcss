import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

enum TimePeriod {
  Days = 'days',
  Hours = 'hours',
  Minutes = 'minutes',
  Seconds = 'seconds',
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnDestroy, OnInit {
  private targetDate = new Date('Nov 10, 2018 10:00:00').getTime();
  public chunks: string;
  private sub: Subscription;

  constructor(readonly ref: ChangeDetectorRef) { }

  tick() {
    const now = new Date().getTime();
    // Find the distance between now and the count down date
    const distance = this.targetDate - now;
    const dd = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const ss = Math.floor((distance % (1000 * 60)) / 1000);
    // Time calculations for days, hours, minutes and seconds
    this.chunks = [
      `${dd}`.padStart(2, '0'),
      `${hh}`.padStart(2, '0'),
      `${mm}`.padStart(2, '0'),
      `${ss}`.padStart(2, '0')
    ].join(':');

    this.ref.detectChanges();
  }

  trackBy(__, item) { return item.value; }

  ngOnInit() {
    this.tick();
    this.sub = interval(1000).subscribe(() => this.tick());
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
