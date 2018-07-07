import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OsComponent } from './os/os.component';
import { DbComponent } from './db/db.component';
import { ProgrammingLanguageComponent } from './programming-language/programming-language.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    OsComponent,
    DbComponent,
    ProgrammingLanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
