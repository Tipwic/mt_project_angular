import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharSheetLayoutComponent } from './char-sheet-layout.component';

describe('CharSheetLayoutComponent', () => {
  let component: CharSheetLayoutComponent;
  let fixture: ComponentFixture<CharSheetLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharSheetLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharSheetLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
