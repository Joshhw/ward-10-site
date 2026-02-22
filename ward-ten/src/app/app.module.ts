import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { CommitteeModule } from './committee/committee.module';
import { HomeModule } from './home/home.module';
import { CalendarModule } from './calendar/calendar.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        UiModule, // new modules added here
        CommitteeModule,
        CalendarModule,
        HomeModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
