import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GISP02Component } from './gisp02.component';

describe('GISP02Component', () => {
  let component: GISP02Component;
  let fixture: ComponentFixture<GISP02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GISP02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GISP02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
