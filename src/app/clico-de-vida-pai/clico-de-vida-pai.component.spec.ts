import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicoDeVidaPaiComponent } from './clico-de-vida-pai.component';

describe('ClicoDeVidaPaiComponent', () => {
  let component: ClicoDeVidaPaiComponent;
  let fixture: ComponentFixture<ClicoDeVidaPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClicoDeVidaPaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClicoDeVidaPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
