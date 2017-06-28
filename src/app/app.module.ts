import { JumbotronComponent } from './jumbtron/jumbtron.component';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';



import { NavBarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    // tslint:disable-next-line:whitespace
    AppComponent,
    NavBarComponent,
    JumbotronComponent

    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
