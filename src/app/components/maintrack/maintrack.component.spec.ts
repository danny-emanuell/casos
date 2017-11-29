import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintrackComponent } from './maintrack.component';

describe('MaintrackComponent', () => {
  let component: MaintrackComponent;
  let fixture: ComponentFixture<MaintrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
