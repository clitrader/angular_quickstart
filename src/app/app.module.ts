import { CustomersComponent } from './customer/customers.component';
import { CustomerComponent } from './customer/customer.component';
import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule, HttpModule ],
  declarations: [ AppComponent , CustomerComponent, CustomersComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

