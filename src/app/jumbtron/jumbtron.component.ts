import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'jumbotron',
  templateUrl: 'jumbtron.component.html'
})

export class JumbotronComponent {
   private jbtHeading: string;
   private jbtText: string;
   private jbtBtnText: string;
   private jbtBtnUrl: string;
   constructor() {
       this.jbtHeading = 'Hello World';
       // tslint:disable-next-line:max-line-length
       this.jbtText =  'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
       this.jbtBtnText =  'Read More';
       this.jbtBtnUrl = '/about';
   }
}
