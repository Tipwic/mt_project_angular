import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoreLayoutComponent } from './lore-layout.component';

describe('LoreLayoutComponent', () => {
  let component: LoreLayoutComponent;
  let fixture: ComponentFixture<LoreLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoreLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoreLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
