import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTypSideNavComponent } from './home-typ-side-nav.component';

describe('HomeTypSideNavComponent', () => {
  let component: HomeTypSideNavComponent;
  let fixture: ComponentFixture<HomeTypSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTypSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTypSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
