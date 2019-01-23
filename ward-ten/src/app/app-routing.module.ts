import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { MembershipComponent } from './membership/membership/membership.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'membership', component: MembershipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
