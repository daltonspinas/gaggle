import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMaskComponent } from './popup-mask.component';

describe('PopupMaskComponent', () => {
  let component: PopupMaskComponent;
  let fixture: ComponentFixture<PopupMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
