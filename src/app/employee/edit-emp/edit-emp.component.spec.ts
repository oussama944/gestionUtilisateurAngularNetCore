import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEMPComponent } from './edit-emp.component';

describe('EditEMPComponent', () => {
  let component: EditEMPComponent;
  let fixture: ComponentFixture<EditEMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEMPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
