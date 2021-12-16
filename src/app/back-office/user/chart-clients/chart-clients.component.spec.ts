import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartClientsComponent } from './chart-clients.component';

describe('ChartClientsComponent', () => {
  let component: ChartClientsComponent;
  let fixture: ComponentFixture<ChartClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
