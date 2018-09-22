import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../ticket.interface';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketCardComponent {
  @Input() data: Ticket;
  @Output() buy: EventEmitter<any> = new EventEmitter();
}
