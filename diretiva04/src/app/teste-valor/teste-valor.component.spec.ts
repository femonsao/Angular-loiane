import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteValorComponent } from './teste-valor.component';

describe('TesteValorComponent', () => {
  let component: TesteValorComponent;
  let fixture: ComponentFixture<TesteValorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteValorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
