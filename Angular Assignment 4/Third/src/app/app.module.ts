import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayallbooksComponent } from './displayallbooks/displayallbooks.component';
import { DisplayallbooksnameComponent } from './displayallbooksname/displayallbooksname.component';
import { DisplayallbooksnameandpriceComponent } from './displayallbooksnameandprice/displayallbooksnameandprice.component';
import { BooksdetailsService } from './booksdetails.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DisplayallbooksComponent,
    DisplayallbooksnameComponent,
    DisplayallbooksnameandpriceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BooksdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
