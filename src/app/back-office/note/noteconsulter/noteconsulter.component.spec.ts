import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteconsulterComponent } from './noteconsulter.component';

describe('NoteconsulterComponent', () => {
  let component: NoteconsulterComponent;
  let fixture: ComponentFixture<NoteconsulterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteconsulterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteconsulterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
