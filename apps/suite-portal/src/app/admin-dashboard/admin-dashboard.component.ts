import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MaintenanceRequest } from '@suiteportal/api-interfaces';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'sp-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  maintenanceRequests: MaintenanceRequest[] = [];
  expandedElement: MaintenanceRequest | null;

  constructor(private http: HttpClient, private sharedService : SharedService) { }

  ngOnInit(): void {
    this.getOpenMaintenanceRequests();
  }

  getOpenMaintenanceRequests(): void {
    this.http.get<MaintenanceRequest[]>('/api/maintenance-requests')
      .subscribe(requests => {
        this.maintenanceRequests = requests;
      }, error => {
        console.error('Error fetching maintenance requests', error);
      });
  }

  closeMaintenanceRequest(id: string): void {
    const confirmCloseRequest = confirm('Are you sure you want to close this maintenance request?');
    
    if (confirmCloseRequest) {
      this.http.put(`api/maintenance-requests/${id}/close`, {})
        .subscribe(() => {
          this.maintenanceRequests = this.maintenanceRequests.filter(req => req.id !== id);
          this.sharedService.showSnackbar("Maintance request closed successfully.");
        }, error => {
          console.error('Error closing maintenance request', error);
          this.sharedService.showSnackbar("Error closing maintenance request");
        }
      );
    }
  }

}
