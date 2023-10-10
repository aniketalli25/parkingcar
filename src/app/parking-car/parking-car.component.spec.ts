import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingCarComponent } from './parking-car.component';

describe('ParkingCarComponent', () => {
  let component: ParkingCarComponent;
  let fixture: ComponentFixture<ParkingCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
