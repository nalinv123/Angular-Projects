import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayallbooksnameandpriceComponent } from './displayallbooksnameandprice.component';

describe('DisplayallbooksnameandpriceComponent', () => {
  let component: DisplayallbooksnameandpriceComponent;
  let fixture: ComponentFixture<DisplayallbooksnameandpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayallbooksnameandpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayallbooksnameandpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
