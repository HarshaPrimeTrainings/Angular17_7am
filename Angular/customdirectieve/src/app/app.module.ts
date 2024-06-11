import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './democomponent';
import { MyComponent } from './mycomponent';
import { HeaderComponent } from './header/header.component';
import { DemoDirective } from './demo.directive';

@NgModule({
  declarations: [
    AppComponent,DemoComponent,MyComponent, HeaderComponent, DemoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
