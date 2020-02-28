import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilLayoutComponent } from './profil-layout.component';

describe('ProfilLayoutComponent', () => {
  let component: ProfilLayoutComponent;
  let fixture: ComponentFixture<ProfilLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
