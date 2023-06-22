import { Component, OnInit } from '@angular/core';
import { EventsComponent } from 'src/app/user/components/events/events.component';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.css']
})
export class SideFilterComponent implements OnInit {
  value: any;

  constructor(private eventcomponent:EventsComponent) { }
  clickingComedy(){
    this.value="comedy"
    this.eventcomponent.fetchEvents(this.value);
  }clickingExhibitions(){
    this.value="exhibitions"
    this.eventcomponent.fetchEvents(this.value);
  }clickingParties(){
    this.value="Parties"
    this.eventcomponent.fetchEvents(this.value);
  }clickingSports(){
    this.value="Sports"
    this.eventcomponent.fetchEvents(this.value);
  }
  clickingWorkshops(){
    this.value="Workshops"
    this.eventcomponent.fetchEvents(this.value);
  }

  ngOnInit(): void {
  }

}
