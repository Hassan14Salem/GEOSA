import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOfGISP01Component } from './manager-of-gisp01.component';

describe('ManagerOfGISP01Component', () => {
  let component: ManagerOfGISP01Component;
  let fixture: ComponentFixture<ManagerOfGISP01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOfGISP01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerOfGISP01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
