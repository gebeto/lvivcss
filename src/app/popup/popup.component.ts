import { Component, Input, ChangeDetectionStrategy, HostListener, Output, EventEmitter, OnChanges } from '@angular/core';
import { DataCard } from '../data-card';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupComponent {
  @Output() close: EventEmitter<any> = new EventEmitter;
  @Output() shift: EventEmitter<number> = new EventEmitter;
  @Input() value: DataCard;
  @HostListener('click') onClick() {
    this.close.emit();
  }
}
