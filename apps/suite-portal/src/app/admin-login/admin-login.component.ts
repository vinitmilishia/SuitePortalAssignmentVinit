import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'sp-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private sharedService: SharedService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log('Login data:', formData);
      // Handle the login logic here (e.g., call an API)
      this.http.post('/api/login', formData)
      .subscribe(response => {
        console.log('Request submitted successfully', response);
        localStorage.setItem('token', response['token']);
        this.router.navigate(['/admin-dashboard']);
      }, error => {
        console.error('Error submitting Login Data', error);
        this.sharedService.showSnackbar(error.status+':'+error.statusText);
      });
    } else {
      this.sharedService.showSnackbar('Form is invalid');
      console.log('Form is invalid');
    }
  }
}
