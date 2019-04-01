import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FooterComponent } from './shared/layout/footer.component';
import {HeaderComponent} from './shared/layout/header.component';
import {NavComponent } from './shared/layout/nav.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
