import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEMPComponent } from './show-emp.component';

describe('ShowEMPComponent', () => {
  let component: ShowEMPComponent;
  let fixture: ComponentFixture<ShowEMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEMPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
