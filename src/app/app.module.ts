import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { CounterComponent } from './counter/components/counter/counter.component';



@NgModule({
  declarations: [
    AppComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    CounterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
