import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTransActionComponent } from './second-trans-action.component';

describe('SecondTransActionComponent', () => {
  let component: SecondTransActionComponent;
  let fixture: ComponentFixture<SecondTransActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondTransActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondTransActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
