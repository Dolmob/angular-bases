import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { counterModule } from './counter/components/counter.module';
import { heroesModule } from './heroes/components/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    counterModule,
    BrowserModule,
    heroesModule,
    DbzModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
