import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBgComponent } from './mobile-bg.component';

describe('MobileBgComponent', () => {
  let component: MobileBgComponent;
  let fixture: ComponentFixture<MobileBgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileBgComponent]
    });
    fixture = TestBed.createComponent(MobileBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
