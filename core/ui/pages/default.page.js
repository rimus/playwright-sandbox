import { HeaderComponent } from '../components/header.component.js';
import { RightAccordion } from '../components/right-accordion.component.js';

export class DefaultPage {
  constructor(page) {
    this.page = page;
    this.header = new HeaderComponent(page);
    this.rightAccordion = new RightAccordion(page);
  }
}
