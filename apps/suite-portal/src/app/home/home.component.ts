import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ALL_SERVICE_TYPES, MaintenanceRequest } from '@suiteportal/api-interfaces';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  serviceTypes = ALL_SERVICE_TYPES;
  maintenanceForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private sharedService: SharedService) {
    this.maintenanceForm = this.fb.group({
      unitNumber: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      serviceType: ['', Validators.required],
      summary: ['', Validators.required],
      details: ['']
    });
  }

  ngOnInit(): void {
    //
  }

  onSubmit(): void {
    if (this.maintenanceForm.valid) {
      const requestData: MaintenanceRequest = this.maintenanceForm.value;
      console.log('Login data:', requestData);
      this.http.post('/api/maintenance-requests', requestData)
        .subscribe(response => {
          console.log('Request submitted successfully', response);
          this.sharedService.showSnackbar('Request submitted successfully!');
          this.maintenanceForm.reset();
        }, error => {
          console.error('Error submitting request', error);
          this.sharedService.showSnackbar('Failed to submit request.'); 
        });
    } else {
      console.log('Form is invalid');
    }
  }

}
