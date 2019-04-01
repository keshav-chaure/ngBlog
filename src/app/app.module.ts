import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FooterComponent } from './shared/layout/footer.component';
import {HeaderComponent} from './shared/layout/header.component';
import {NavComponent } from './shared/layout/nav.component';
import {SidebarComponent} from './shared/layout/sidebar.component';
import {ContainerComponent} from './shared/layout/container.component';
import {ContaintComponent} from './shared/layout/containt.component';
@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    FooterComponent, 
    NavComponent,
    SidebarComponent,
    ContainerComponent,
    ContaintComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
