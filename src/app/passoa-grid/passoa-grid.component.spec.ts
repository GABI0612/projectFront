import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassoaGridComponent } from './passoa-grid.component';

describe('PassoaGridComponent', () => {
  let component: PassoaGridComponent;
  let fixture: ComponentFixture<PassoaGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassoaGridComponent]
    });
    fixture = TestBed.createComponent(PassoaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
