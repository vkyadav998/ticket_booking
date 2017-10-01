import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.css']
})
export class TicketlistComponent implements OnInit {

  constructor(private _http:Http) { };

  tickets : any [];
  private _url = 'booking_service/getall_ticket';

  ngOnInit() {
    this._http.get(this._url).subscribe((data) => {
      this.tickets = data.json().allItom;
    });
  }

}
