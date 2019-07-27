import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsigninComponent } from './lsignin.component';

describe('LsigninComponent', () => {
  let component: LsigninComponent;
  let fixture: ComponentFixture<LsigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
