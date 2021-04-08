import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosEditComponent } from './articulos-edit.component';

describe('ArticulosEditComponent', () => {
  let component: ArticulosEditComponent;
  let fixture: ComponentFixture<ArticulosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
