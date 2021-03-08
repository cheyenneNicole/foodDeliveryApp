import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanFoodComponent } from './american-food.component';

describe('AmericanFoodComponent', () => {
  let component: AmericanFoodComponent;
  let fixture: ComponentFixture<AmericanFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmericanFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericanFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
