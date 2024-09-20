import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'sp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'suite-portal';

  isAdminDashboard: boolean = false;
  token: string | null;

  constructor(private router: Router) {
    this.token = localStorage.getItem('token'); 

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isAdminDashboard = this.router.url === '/admin-dashboard';
        this.token = localStorage.getItem('token');
      }
    });
  }

  logout() {
    localStorage.removeItem('token'); 
    this.router.navigate(['/admin']); 
  }
}
