import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechProcessActionComponent } from './tech-process-action.component';

describe('TechProcessActionComponent', () => {
  let component: TechProcessActionComponent;
  let fixture: ComponentFixture<TechProcessActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechProcessActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechProcessActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
