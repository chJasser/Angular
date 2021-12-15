import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductBackComponent } from './detail-product-back.component';

describe('DetailProductBackComponent', () => {
  let component: DetailProductBackComponent;
  let fixture: ComponentFixture<DetailProductBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProductBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProductBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
