import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPage3Component } from './tech-page3.component';

describe('TechPage3Component', () => {
  let component: TechPage3Component;
  let fixture: ComponentFixture<TechPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechPage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
