import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { SignupComponent } from './authentication/components/signup/signup.component';
import { ContactComponent } from './user/components/contact/contact.component';
import { EventsDetailComponent } from './user/components/events-detail/events-detail.component';
import { EventsComponent } from './user/components/events/events.component';
import { HomeComponent } from './user/components/home/home.component';

const routes: Routes = [
  {
    path:"home",component:HomeComponent
  },
  {
    path:"events",component:EventsComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path:"events-detail",component:EventsDetailComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"contact",component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
