import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GISP01Component } from './gisp01.component';

describe('GISP01Component', () => {
  let component: GISP01Component;
  let fixture: ComponentFixture<GISP01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GISP01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GISP01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
