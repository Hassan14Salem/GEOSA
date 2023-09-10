import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GISP04Component } from './gisp04.component';

describe('GISP04Component', () => {
  let component: GISP04Component;
  let fixture: ComponentFixture<GISP04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GISP04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GISP04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
