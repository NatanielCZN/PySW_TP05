import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto1FormComponent } from './punto1-form.component';

describe('Punto1FormComponent', () => {
  let component: Punto1FormComponent;
  let fixture: ComponentFixture<Punto1FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto1FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
