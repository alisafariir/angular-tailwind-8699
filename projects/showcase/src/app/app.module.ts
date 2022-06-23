import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@mylib/components/button';
import { TextBoxModule } from '@mylib/components/text-box';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TextBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
