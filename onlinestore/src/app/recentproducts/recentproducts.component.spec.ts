import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentproductsComponent } from './recentproducts.component';

describe('RecentproductsComponent', () => {
  let component: RecentproductsComponent;
  let fixture: ComponentFixture<RecentproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
