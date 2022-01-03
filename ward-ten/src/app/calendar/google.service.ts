import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CalendarEvent } from './events/events.component';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  eventUrl = 'https://d8f0km9es4.execute-api.us-east-1.amazonaws.com/dev/events';
  private cache$: Observable<Array<CalendarEvent>>;

  constructor(private http: HttpClient) { }

  getEvents() {
    if (!this.cache$) {
      this.cache$ = this.requestEvents().pipe(shareReplay(10));
    }
    return this.cache$;
  }

  private requestEvents() {
    return this.http.get(this.eventUrl).pipe(
      map((response: any) => {
        return response.data.map(item => {
          const mapped = {
            summary: item.summary,
            start: item.start,
            location: item.location,
            link: item.htmlLink,
            description: item.description
          };
          return mapped;
        });
      })
    );
  }
}
