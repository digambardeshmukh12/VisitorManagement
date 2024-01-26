import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsRequestComponent } from './appointments-request.component';

describe('AppointmentsRequestComponent', () => {
  let component: AppointmentsRequestComponent;
  let fixture: ComponentFixture<AppointmentsRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentsRequestComponent]
    });
    fixture = TestBed.createComponent(AppointmentsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
