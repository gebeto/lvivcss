import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() solid: boolean;
  @Input() size: string;

  get className() {
    return [
      ...(this.solid ? ['solid'] : []),
      ...(this.size ? [this.size] : [])
    ].join(' ');
  }
}
