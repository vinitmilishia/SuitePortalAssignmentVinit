export enum ServiceType {
  Electrical = 'electrical',
  General = 'general',
  PestControl = 'pest-control',
  Plumbing = 'plumbing',
}

export const ALL_SERVICE_TYPES = [
  ServiceType.Electrical ,
  ServiceType.General ,
  ServiceType.PestControl ,
  ServiceType.Plumbing ,
];

export interface MaintenanceRequest {
  id: string;
  // Name of the requester
  name: string;
  // Email of the requester
  email: string;
  // The unit # in the building
  unitNumber: string;
  // The type of service being requested
  serviceType: ServiceType;
  // A summary of of the issue
  summary: string;
  // Any extra details
  details?: string;
}

export interface AdminCredentials {
  username: string;
  password: string;
}

export interface AdminResponse {
  message: string;
  token?: string; // JWT Token
}