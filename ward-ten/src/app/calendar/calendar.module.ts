import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { GoogleService } from './google.service';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule
  ],
  providers: [
    GoogleService
  ]
})
export class CalendarModule { }
