import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoPesquisaComponent } from './lancamento-pesquisa.component';

describe('LancamentoPesquisaComponent', () => {
  let component: LancamentoPesquisaComponent;
  let fixture: ComponentFixture<LancamentoPesquisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LancamentoPesquisaComponent]
    });
    fixture = TestBed.createComponent(LancamentoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
