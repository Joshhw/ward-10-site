import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../google.service';

export interface CalendarTime {
  dateTime: Date;
}

export interface CalendarEvent {
  summary: string;
  start: CalendarTime;
  location: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  calendarEvents: CalendarEvent[];

  constructor(private gService: GoogleService) { }

  ngOnInit() {
    this.gService.getEvents().subscribe((data: CalendarEvent[]) => {
      this.calendarEvents = data;
    })

  }

}
