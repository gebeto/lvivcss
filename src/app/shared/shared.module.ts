import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../counter/counter.component';
import { InfoCardComponent } from '../info-card/info-card.component';
import { ButtonComponent } from '../button/button.component';
import { Widget2EventComponent } from '../widget2event/widget2event.component';
import { TicketCardComponent } from '../ticket-card/ticket-card.component';
import { SafeHtmlPipe } from '../safe-html.pipe';
import { HeaderComponent } from '../header/header.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

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
    NavigationComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    CounterComponent,
    InfoCardComponent,
    ButtonComponent,
    Widget2EventComponent,
    TicketCardComponent,
    SafeHtmlPipe,
    NavigationComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
