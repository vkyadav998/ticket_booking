import { Component , OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `<div class="text-center">
                <h1 *ngFor="let ticket of tickets">{{ticket.source}}</h1>
              </div>`,
})
export class AppComponent implements OnInit {

  constructor(private _http: Http){  };

  tickets : any [];

  title = 'app';
  ngOnInit() : void {
    this._http.get('booking_service/getall_ticket').subscribe(data => {
      this.tickets = data.json().allItom;
    });
    // this.tickets = [
    //   {"source":"vipin"},
    //   {"source":"ganesh"},
    //   {"source":"vijay"},
    //   {"source":"sachin"}
    // ]
  }
}
