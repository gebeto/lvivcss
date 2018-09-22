import { Component, ChangeDetectionStrategy } from '@angular/core';
import { tickets } from '../tickets';
import { Ticket } from '../ticket.interface';

@Component({
  selector: 'app-tickets-view',
  templateUrl: './tickets-view.component.html',
  styleUrls: ['./tickets-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketsViewComponent {
  readonly tickets: Ticket[] = tickets;
  public ticketId: string;

  onTicketClick(id) {
    this.ticketId = id;
  }

  onWidgetClose() {
    this.ticketId = null;
  }
}
