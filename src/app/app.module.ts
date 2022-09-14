import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatebookComponent } from './components/createbook/createbook.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchbooksComponent } from './components/searchbooks/searchbooks.component';
import { PaymenthistoryComponent } from './components/paymenthistory/paymenthistory.component';
import { EditbookComponent } from './components/editbook/editbook.component';
import { AuthorloginComponent } from './components/authorlogin/authorlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    CreatebookComponent,
    NavbarComponent,
    SearchbooksComponent,
    PaymenthistoryComponent,
    EditbookComponent,
    AuthorloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
