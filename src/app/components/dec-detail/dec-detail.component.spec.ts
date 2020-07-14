import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecDetailComponent } from './dec-detail.component';

describe('DecDetailComponent', () => {
  let component: DecDetailComponent;
  let fixture: ComponentFixture<DecDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
