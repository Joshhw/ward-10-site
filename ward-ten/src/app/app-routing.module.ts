import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CommitteeComponent } from './committee/committee/committee.component';
import { EventsComponent } from './calendar/events/events.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'committee', component: CommitteeComponent},
  {path: 'events', component: EventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
