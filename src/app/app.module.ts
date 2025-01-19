import { NgModule } from '@angular/core';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, ResultCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
