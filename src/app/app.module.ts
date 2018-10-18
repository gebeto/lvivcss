import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase, ''),
    AngularFirestoreModule.enablePersistence(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
