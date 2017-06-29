import { HomeComponent } from './home.component';

import { JumbotronComponent } from './jumbtron/jumbtron.component';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// tslint:disable-next-line:import-spacing
import { RouterModule }   from '@angular/router';


import { NavBarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    // tslint:disable-next-line:whitespace
    AppComponent,
    NavBarComponent,
    JumbotronComponent,
    HomeComponent,
    AboutComponent

    ],

  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
