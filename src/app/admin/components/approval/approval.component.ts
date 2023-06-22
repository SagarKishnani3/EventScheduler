import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {
  data: any;
  val1: any;
  val2: any;

  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.pendingapproval()
  }
  searchText: any;
  pendingapproval(){
    this.adminservice.approvalpending().subscribe((value:any)=>{
      this.data=value;
    })
  }
  
  generateBody(){
    const body={
      'eventname':this.val1,
      'approvalstatus':this.val2
    }
    console.warn(body)
    return body
  }
   adminApprovslRejection(val1:any,val2:any){
    this.val1=val1;
    this.val2=val2;
    this.generateBody()
    const val=this.generateBody()
    console.log(val);
    this.adminservice.adminApprovslRejection(val).subscribe((value:any)=>{
      console.warn("done");
    })
  }

}
