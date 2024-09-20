import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AdminLoginModule } from './admin-login/admin-login.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    HomeModule,
    AdminLoginModule,
    AdminDashboardModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
