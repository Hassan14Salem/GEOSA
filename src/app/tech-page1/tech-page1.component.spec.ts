import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPage1Component } from './tech-page1.component';

describe('TechPage1Component', () => {
  let component: TechPage1Component;
  let fixture: ComponentFixture<TechPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
