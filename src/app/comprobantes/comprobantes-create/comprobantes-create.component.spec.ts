import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantesCreateComponent } from './comprobantes-create.component';

describe('ComprobantesCreateComponent', () => {
  let component: ComprobantesCreateComponent;
  let fixture: ComponentFixture<ComprobantesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprobantesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobantesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
