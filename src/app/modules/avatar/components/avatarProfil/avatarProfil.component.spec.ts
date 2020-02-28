import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarProfilComponent } from './avatarProfil.component';

describe('AvatarProfilComponent', () => {
  let component: AvatarProfilComponent;
  let fixture: ComponentFixture<AvatarProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
