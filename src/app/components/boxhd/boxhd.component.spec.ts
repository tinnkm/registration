import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxhdComponent } from './boxhd.component';

describe('BoxhdComponent', () => {
  let component: BoxhdComponent;
  let fixture: ComponentFixture<BoxhdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxhdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxhdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
