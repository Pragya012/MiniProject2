import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonebookComponent } from './phonebook/phonebook.component';

import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import {RouterModule, Routes} from '@angular/router';
var myRoutes:Routes=[
  {path:"contact", component:ContactComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PhonebookComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
