import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOfGISP02Component } from './manager-of-gisp02.component';

describe('ManagerOfGISP02Component', () => {
  let component: ManagerOfGISP02Component;
  let fixture: ComponentFixture<ManagerOfGISP02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOfGISP02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerOfGISP02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
