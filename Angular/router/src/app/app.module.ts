import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './democomponent';
import { MyComponent } from './mycomponent';
import { HeaderComponent } from './header/header.component';
import { DemoDirective } from './demo.directive';
import { EveoroddPipe } from './eveorodd.pipe';
import { DemoService } from './demo.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,DemoComponent,MyComponent, HeaderComponent, DemoDirective, EveoroddPipe, InboxComponent, SentComponent, UsersComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
