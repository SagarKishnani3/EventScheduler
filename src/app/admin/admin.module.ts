import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalComponent } from './components/approval/approval.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ApprovalComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule
  ],
  exports:[
    ApprovalComponent
  ]
})
export class AdminModule { }
