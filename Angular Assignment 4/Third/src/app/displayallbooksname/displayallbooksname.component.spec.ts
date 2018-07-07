import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayallbooksnameComponent } from './displayallbooksname.component';

describe('DisplayallbooksnameComponent', () => {
  let component: DisplayallbooksnameComponent;
  let fixture: ComponentFixture<DisplayallbooksnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayallbooksnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayallbooksnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
