import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameControlComponent } from './assigment_1/game-control/game-control.component';
import { OddComponent } from './assigment_1/odd/odd.component';
import { EvenComponent } from './assigment_1/even/even.component';


@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }