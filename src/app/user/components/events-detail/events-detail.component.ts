import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
  

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css']
})
export class EventsDetailComponent implements OnInit {
  detail: any;
  eventid: any;

  constructor(private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
  //  this.route.params.subscribe(params=>this.getDetailById(params['eventid']));
  this.route.paramMap.subscribe(param=>{
    console.log(param.get('eventid'))
    let pid = param.get('eventid')
    console.warn(pid);
    this.userService.eventdetail(pid).subscribe((value:any)=>{
      console.warn(value);
    })
  })
  }
  // getDetailById(id:number){
  //   this.detail = this.userService.getDetailById(id);
  //   console.log(this.detail);
  // }


}
