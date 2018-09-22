import { Component, OnInit } from '@angular/core';
import { partners } from '../partners.list';

@Component({
  selector: 'app-partners-view',
  templateUrl: './partners-view.component.html',
  styleUrls: ['./partners-view.component.css']
})
export class PartnersViewComponent implements OnInit {
  readonly partners = {
    ...{ sponsors: partners.sponsors },
    ...{ media: partners.media }
  };
  constructor() { }

  ngOnInit() {
  }

}
