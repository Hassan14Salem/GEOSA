import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangerOfTechComponent } from './manger-of-tech.component';

describe('MangerOfTechComponent', () => {
  let component: MangerOfTechComponent;
  let fixture: ComponentFixture<MangerOfTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangerOfTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangerOfTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
