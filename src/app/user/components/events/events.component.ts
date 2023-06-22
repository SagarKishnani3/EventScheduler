import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  Comedy: any;
  data2: any;
  eventid: any;

  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userservice.fetchEvents().subscribe((value:any)=>{
      this.data2=value;
      console.warn(this.data2);
    })
    
  }
  fetchEvents(valu:any){
    this.Comedy=valu;
    // this.userservice.fetchEvents().subscribe((value:any)=>{
    //   this.data2=value;
    //   console.warn(this.data2);
    // })
  }
  // getDetailById(id: number) {
  //   return this.data2.filter((value:any)=>value.eventid==id)[0];
  // }
  navigate(detail:any):void{
    this.router.navigate(
      ['/events-detail', detail.eventid],
  );
  // this.userservice.myData=detail;
  this.eventid=detail.eventid
  console.log(this.eventid)
  }

  geteventid(){
    return this.eventid;
  }


}
