import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    MatExpansionModule,
  ],
  declarations: [AdminDashboardComponent],
  exports: [AdminDashboardComponent]
})
export class AdminDashboardModule { }
