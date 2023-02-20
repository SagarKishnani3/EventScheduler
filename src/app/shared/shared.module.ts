import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';

import { RouterModule } from '@angular/router';
import { SideFilterComponent } from './components/side-filter/side-filter.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    TopNavComponent,
    SideFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule

  ],
  exports:[
    TopNavComponent,
    SideFilterComponent
  ]
})
export class SharedModule { }
