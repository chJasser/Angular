import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterNoteComponent } from './consulter-note.component';

describe('ConsulterNoteComponent', () => {
  let component: ConsulterNoteComponent;
  let fixture: ComponentFixture<ConsulterNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
