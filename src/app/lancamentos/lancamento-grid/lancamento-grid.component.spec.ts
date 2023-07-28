import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoGridComponent } from './lancamento-grid.component';

describe('LancamentoGridComponent', () => {
  let component: LancamentoGridComponent;
  let fixture: ComponentFixture<LancamentoGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LancamentoGridComponent]
    });
    fixture = TestBed.createComponent(LancamentoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
