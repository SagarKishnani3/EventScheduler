import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalComponent } from './admin/components/approval/approval.component';
import { AdminLoginComponent } from './authentication/components/admin-login/admin-login.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { SignupComponent } from './authentication/components/signup/signup.component';
import { SideFilterComponent } from './shared/components/side-filter/side-filter.component';
import { ContactComponent } from './user/components/contact/contact.component';
import { EventsDetailComponent } from './user/components/events-detail/events-detail.component';
import { EventsComponent } from './user/components/events/events.component';
import { HomeComponent } from './user/components/home/home.component';
import { ListYourShowsComponent } from './user/components/list-your-shows/list-your-shows.component';

const routes: Routes = [
  {
    path:"home",component:HomeComponent
  },
  {
    path:"events",component:EventsComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path:"events-detail/:eventid",component:EventsDetailComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"side-filter",component:SideFilterComponent
  },
  {
    path:"approval",component:ApprovalComponent
  },
  {
    path:"admin-login",component:AdminLoginComponent
  },
  {
    path:"list-your-shows",component:ListYourShowsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
