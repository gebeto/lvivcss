import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

enum TimePeriod {
  Days = 'days',
  Hours = 'hours',
  Minutes = 'minutes',
  Seconds = 'seconds',
}

interface DateChunk {
  value: number;
  period: TimePeriod;
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnDestroy, OnInit {
  private targetDate = new Date('Nov 10, 2018 10:00:00').getTime();
  public chunks: DateChunk[] = [];
  private sub: Subscription;

  constructor(readonly ref: ChangeDetectorRef) { }

  tick() {
    const now = new Date().getTime();
    // Find the distance between now and the count down date
    const distance = this.targetDate - now;

    // Time calculations for days, hours, minutes and seconds
    this.chunks = [
      {
        value: Math.floor(distance / (1000 * 60 * 60 * 24)),
        period: TimePeriod.Days
      },
      {
        value: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        period: TimePeriod.Hours
      },
      {
        value: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        period: TimePeriod.Minutes
      },
      {
        value: Math.floor((distance % (1000 * 60)) / 1000),
        period: TimePeriod.Seconds
      }
    ];

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
