import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleLayoutComponent } from './schedule-layout.component';

describe('ScheduleLayoutComponent', () => {
  let component: ScheduleLayoutComponent;
  let fixture: ComponentFixture<ScheduleLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
