import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { EventsDetailComponent } from './components/events-detail/events-detail.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { ListYourShowsComponent } from './components/list-your-shows/list-your-shows.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    EventsComponent,
    EventsDetailComponent,
    ContactComponent,
    ListYourShowsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports:[
    HomeComponent,
    EventsComponent,
    EventsDetailComponent,
    ContactComponent,
    ListYourShowsComponent
  ]
})
export class UserModule { }
