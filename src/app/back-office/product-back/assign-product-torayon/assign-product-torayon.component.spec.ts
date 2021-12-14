import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProductTorayonComponent } from './assign-product-torayon.component';

describe('AssignProductTorayonComponent', () => {
  let component: AssignProductTorayonComponent;
  let fixture: ComponentFixture<AssignProductTorayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignProductTorayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignProductTorayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
