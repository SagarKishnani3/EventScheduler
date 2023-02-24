import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-your-shows',
  templateUrl: './list-your-shows.component.html',
  styleUrls: ['./list-your-shows.component.css']
})
export class ListYourShowsComponent implements OnInit {
  closeResult!: string;
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
    
    driveTitle: new FormControl("", Validators.required),
    driveDescription: new FormControl("", Validators.required),
    TargetedMoney: new FormControl("", Validators.required),
    Info: new FormControl("",Validators.required)
    
  });

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }
  onSubmit(){
    
    console.log(this.Reactiveform.value)
  
}
get driveDescription(){
  return  this.Reactiveform.get('driveDescription')
 }
 get driveTitle(){
  return  this.Reactiveform.get('driveTitle')
 }
 get TargetedMoney(){
  return  this.Reactiveform.get('TargetedMoney')
 }
 get Info(){
  return this.Reactiveform.get('Info')
 }

}
