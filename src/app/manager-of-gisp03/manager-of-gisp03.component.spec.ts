import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOfGISP03Component } from './manager-of-gisp03.component';

describe('ManagerOfGISP03Component', () => {
  let component: ManagerOfGISP03Component;
  let fixture: ComponentFixture<ManagerOfGISP03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOfGISP03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerOfGISP03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
