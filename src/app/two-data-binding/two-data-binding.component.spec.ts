import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDataBindingComponent } from './two-data-binding.component';

describe('TwoDataBindingComponent', () => {
  let component: TwoDataBindingComponent;
  let fixture: ComponentFixture<TwoDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoDataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
