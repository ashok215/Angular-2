
import { Component } from '@angular/core';
import { NavBarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbtron/jumbtron.component';
import { AboutComponent } from './Pages/about.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  title= 'My first App';
}
