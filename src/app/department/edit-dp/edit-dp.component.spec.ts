import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDPComponent } from './edit-dp.component';

describe('EditDPComponent', () => {
  let component: EditDPComponent;
  let fixture: ComponentFixture<EditDPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
