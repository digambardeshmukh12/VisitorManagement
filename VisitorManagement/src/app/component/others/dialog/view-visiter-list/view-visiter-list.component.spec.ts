import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisiterListComponent } from './view-visiter-list.component';

describe('ViewVisiterListComponent', () => {
  let component: ViewVisiterListComponent;
  let fixture: ComponentFixture<ViewVisiterListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewVisiterListComponent]
    });
    fixture = TestBed.createComponent(ViewVisiterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
