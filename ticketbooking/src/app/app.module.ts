import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketlistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
