import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleLayoutComponent } from './rule-layout.component';

describe('RuleLayoutComponent', () => {
  let component: RuleLayoutComponent;
  let fixture: ComponentFixture<RuleLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
