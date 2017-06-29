import { HomeComponent } from './../home.component';
import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  moduleId: module.id,
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
})

// tslint:disable-next-line:no-trailing-whitespace
export class NavBarComponent { 
 Name= 'My website';
}
