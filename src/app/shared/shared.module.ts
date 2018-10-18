import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../counter/counter.component';
import { InfoCardComponent } from '../info-card/info-card.component';
import { ButtonComponent } from '../button/button.component';
import { Widget2EventComponent } from '../widget2event/widget2event.component';
import { TicketCardComponent } from '../ticket-card/ticket-card.component';
import { SafeHtmlPipe } from '../safe-html.pipe';
import { RouterModule } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CounterComponent,
    InfoCardComponent,
    ButtonComponent,
    Widget2EventComponent,
    TicketCardComponent,
    SafeHtmlPipe,
    PopupComponent
  ],
  exports: [
    CounterComponent,
    InfoCardComponent,
    ButtonComponent,
    Widget2EventComponent,
    TicketCardComponent,
    SafeHtmlPipe,
    PopupComponent
  ]
})
export class SharedModule { }
