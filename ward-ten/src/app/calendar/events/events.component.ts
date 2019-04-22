import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../google.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  calendarEvents

  constructor(private gService: GoogleService) { }

  ngOnInit() {
    this.gService.getEvents().subscribe((data:any) => {
      this.calendarEvents = data.data;
    })

  }

}
