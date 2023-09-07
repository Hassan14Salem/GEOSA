import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransActionComponent } from './trans-action.component';

describe('TransActionComponent', () => {
  let component: TransActionComponent;
  let fixture: ComponentFixture<TransActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
