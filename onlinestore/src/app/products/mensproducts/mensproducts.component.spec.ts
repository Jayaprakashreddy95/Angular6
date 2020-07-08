import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensproductsComponent } from './mensproducts.component';

describe('MensproductsComponent', () => {
  let component: MensproductsComponent;
  let fixture: ComponentFixture<MensproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
