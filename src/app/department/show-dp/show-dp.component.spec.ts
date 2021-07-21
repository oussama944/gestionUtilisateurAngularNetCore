import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDPComponent } from './show-dp.component';

describe('ShowDPComponent', () => {
  let component: ShowDPComponent;
  let fixture: ComponentFixture<ShowDPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
