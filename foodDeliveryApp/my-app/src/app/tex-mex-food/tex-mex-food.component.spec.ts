import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexMexFoodComponent } from './tex-mex-food.component';

describe('TexMexFoodComponent', () => {
  let component: TexMexFoodComponent;
  let fixture: ComponentFixture<TexMexFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexMexFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexMexFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
