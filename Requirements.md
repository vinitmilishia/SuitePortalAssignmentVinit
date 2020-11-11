# Assignment Instructions

The SuitePortal is a resident portal for residents of a building to submit maintenance requests for their unit.

There will be two types of users of this web app: residents and admins.

The residents should be able to access the maintenance request forms

The admins should be able to see a list of open maintenace requests and should be able to close them

A maintenance request should have these fields:

```
export interface MaintenanceRequest {
  // Name of the requester
  name: string;
  // Email of the requester
  email: string;
  // The unit # in the building
  unit: string;
  // The type of service being requested
  serviceType: ServiceType;
  // A summary of of the issue
  summary: string;
  // Any extra details
  details?: string;
}
```

Requirements:

1. Admin users should be able to go to the `/admin` page and login to a special admin account
2. Resident users should do not need an account to submit the maintenance request form
3. The maintenance request form should have fields to set all the properties of the MaintenanceRequest interface. The form should submit to `POST /api/maintenance-requests`
4. The request form should be implemented using [Angular's Reactive Forms](https://angular.io/guide/reactive-forms)
5. Add a new API endpoint for Admin's to `GET /api/maintenance-requests` to return a list of open maintenance requests
6. Add a new API endpoint for Admin's to `PUT /api/maintenance-requests/:id/close` to close a specified issue with an `id`
  
Bonus Requirements:
1. Unit Tests
2. Cypress E2E Tests
   
  
