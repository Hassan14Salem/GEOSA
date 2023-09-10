import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangerOfTechP02Component } from './manger-of-tech-p02.component';

describe('MangerOfTechP02Component', () => {
  let component: MangerOfTechP02Component;
  let fixture: ComponentFixture<MangerOfTechP02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangerOfTechP02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangerOfTechP02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
