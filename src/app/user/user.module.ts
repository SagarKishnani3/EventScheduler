import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { EventsDetailComponent } from './components/events-detail/events-detail.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    EventsComponent,
    EventsDetailComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
    
  ],
  exports:[
    HomeComponent,
    EventsComponent,
    EventsDetailComponent,
    ContactComponent
  ]
})
export class UserModule { }
