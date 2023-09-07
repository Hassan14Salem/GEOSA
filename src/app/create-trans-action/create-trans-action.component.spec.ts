import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransActionComponent } from './create-trans-action.component';

describe('CreateTransActionComponent', () => {
  let component: CreateTransActionComponent;
  let fixture: ComponentFixture<CreateTransActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTransActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTransActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
