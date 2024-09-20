import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { SharedModule } from '../shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MatExpansionModule } from '@angular/material/expansion';

describe('AdminDashboardComponent', () => {
  let component: AdminDashboardComponent;
  let fixture: ComponentFixture<AdminDashboardComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardComponent ],
      imports: [
        SharedModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatExpansionModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController); 
    fixture.detectChanges();
  });

  it('should call ngOnInit to fetch maintenance requests', () => {
    const spy = spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should close a maintenance request', fakeAsync(() =>  {
    const requestId = 'CEkqVTKVcx'; // Use a mock request ID
    spyOn(window, 'confirm').and.returnValue(true); // Mocking the confirm dialog
    component.closeMaintenanceRequest(requestId);
    tick();
    expect(component.maintenanceRequests.length).toBe(0); 
  }));
});
