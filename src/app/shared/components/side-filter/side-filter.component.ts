import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-filter',
  templateUrl: './side-filter.component.html',
  styleUrls: ['./side-filter.component.css']
})
export class SideFilterComponent implements OnInit {

  constructor() { }
  clickingComedy(){
    // this.value="comedy"
    // this.eventcomponent.fetchEvents(this.value);
  }clickingExhibitions(){
    // this.value="Exhibition"
    // this.eventcomponent.fetchEvents(this.value);
  }clickingParties(){
    // this.value="Parties"
    // this.eventcomponent.fetchEvents(this.value);
  }clickingSports(){
    // this.value="Sports"
    // this.eventcomponent.fetchEvents(this.value);
  }
  clickingWorkshops(){
    // this.value="Workshops"
    // this.eventcomponent.fetchEvents(this.value);
  }

  ngOnInit(): void {
  }

}
