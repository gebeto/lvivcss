import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../counter/counter.component';
import { InfoCardComponent } from '../info-card/info-card.component';
import { FeatureModule } from '../feature/feature.module';
import { ButtonComponent } from '../button/button.component';
import { Widget2EventComponent } from '../widget2event/widget2event.component';
import { TicketCardComponent } from '../ticket-card/ticket-card.component';
import { SafeHtmlPipe } from '../safe-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    FeatureModule,
  ],
  declarations: [
    CounterComponent,
    InfoCardComponent,
    ButtonComponent,
    Widget2EventComponent,
    TicketCardComponent,
    SafeHtmlPipe
  ],
  exports: [
    CounterComponent,
    InfoCardComponent,
    ButtonComponent,
    Widget2EventComponent,
    TicketCardComponent,
    SafeHtmlPipe
  ]
})
export class SharedModule { }
