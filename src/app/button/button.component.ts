import { Component, OnInit, HostBinding, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  @Input() solid: boolean;
  @Input() size: string;

  get className() {
    const data = [];
    if (this.solid) {
      data.push('solid');
    }
    
    if (this.size) {
      data.push(this.size);
    }
    return data.join(' ');
  }

  constructor() { }

  ngOnInit() {
  }

}
