import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto3FormComponent } from './punto3-form.component';

describe('Punto3FormComponent', () => {
  let component: Punto3FormComponent;
  let fixture: ComponentFixture<Punto3FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto3FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto3FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
