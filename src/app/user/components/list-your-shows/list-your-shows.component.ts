import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-list-your-shows',
  templateUrl: './list-your-shows.component.html',
  styleUrls: ['./list-your-shows.component.css']
})
export class ListYourShowsComponent implements OnInit {
  closeResult!: string;
  data: any;
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  Reactiveform = new FormGroup({
    
    eventname: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    timings: new FormControl("", Validators.required),
    prices: new FormControl("", Validators.required),
    noofseats: new FormControl("", Validators.required),
    aboutevents: new FormControl("",Validators.required)
    
  });

  constructor(private modalService:NgbModal,private user:UserService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    
    console.log(this.Reactiveform.value)
    this.addEvents();
  
}
get state(){
  return  this.Reactiveform.get('state')
 }
 get date(){
  return  this.Reactiveform.get('date')
 }
 get city(){
  return  this.Reactiveform.get('city')
 }
 get timings(){
  return  this.Reactiveform.get('timings')
 }
 get prices(){
  return  this.Reactiveform.get('prices')
 }
 get noofseats(){
  return  this.Reactiveform.get('noofseats')
 }
 get eventname(){
  return  this.Reactiveform.get('eventname')
 }
 get aboutevents(){
  return this.Reactiveform.get('aboutevents')
 }
addEvents(){
  const temp=this.generateBody()
  console.log(temp)
  this.user.listShows(temp).subscribe((value:any)=>{
    console.warn("done added successfully");
  })

}
select(value:any){
  this.data=value
}
 generateBody(){
  const body={
    ...this.Reactiveform.value,
    categoryid:this.data
  }
  console.warn(body)
  return body
}

}
