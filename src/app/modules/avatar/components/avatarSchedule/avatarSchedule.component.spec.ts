import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarScheduleComponent } from './avatarSchedule.component';

describe('AvatarScheduleComponent', () => {
  let component: AvatarScheduleComponent;
  let fixture: ComponentFixture<AvatarScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
