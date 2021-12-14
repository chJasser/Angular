import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuBrutComponent } from './revenu-brut.component';

describe('RevenuBrutComponent', () => {
  let component: RevenuBrutComponent;
  let fixture: ComponentFixture<RevenuBrutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenuBrutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuBrutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
