import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  eventUrl = 'https://mzx25jawcg.execute-api.us-east-1.amazonaws.com/dev/events';

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get(this.eventUrl).pipe(
      map((response: any) => {
        return response.data.map(item => {
          const mapped = {
            'summary': item.summary,
            'start': item.start,
            'location': item.location,
            'link': item.htmlLink,
            'description': item.description
          };
          return mapped;
        });
      })
    );
  }
}
