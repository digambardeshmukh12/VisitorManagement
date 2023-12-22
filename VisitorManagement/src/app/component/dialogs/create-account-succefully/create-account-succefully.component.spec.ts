import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountSuccefullyComponent } from './create-account-succefully.component';

describe('CreateAccountSuccefullyComponent', () => {
  let component: CreateAccountSuccefullyComponent;
  let fixture: ComponentFixture<CreateAccountSuccefullyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAccountSuccefullyComponent]
    });
    fixture = TestBed.createComponent(CreateAccountSuccefullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
