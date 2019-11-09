import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNavDropComponent } from './info-nav-drop.component';

describe('InfoNavDropComponent', () => {
  let component: InfoNavDropComponent;
  let fixture: ComponentFixture<InfoNavDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoNavDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNavDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
