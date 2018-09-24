import { Component } from '@angular/core';
import { partners } from '../partners.list';

@Component({
  selector: 'app-partners-view',
  templateUrl: './partners-view.component.html',
  styleUrls: ['./partners-view.component.css']
})
export class PartnersViewComponent {
  readonly partners = {
    ...{ sponsors: partners.sponsors },
    ...{ media: partners.media }
  };
  goToSponsor() {
    window.location.href = 'http://global-css.org/lvivcss-2018-partnership/en';
  }
}
