import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ],
  declarations: [DashboardHomeComponent]
})
export class DashboardModule { }
