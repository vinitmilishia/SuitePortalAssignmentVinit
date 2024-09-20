import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminLoginComponent, 
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [
    HomeModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      enableTracing: true,
      relativeLinkResolution: 'corrected',
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
