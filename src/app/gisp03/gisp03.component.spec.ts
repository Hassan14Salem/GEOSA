import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GISP03Component } from './gisp03.component';

describe('GISP03Component', () => {
  let component: GISP03Component;
  let fixture: ComponentFixture<GISP03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GISP03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GISP03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
