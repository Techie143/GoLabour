import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsignupComponent } from './lsignup.component';

describe('LsignupComponent', () => {
  let component: LsignupComponent;
  let fixture: ComponentFixture<LsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
