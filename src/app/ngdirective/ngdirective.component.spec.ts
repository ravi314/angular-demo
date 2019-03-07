import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdirectiveComponent } from './ngdirective.component';

describe('NgdirectiveComponent', () => {
  let component: NgdirectiveComponent;
  let fixture: ComponentFixture<NgdirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgdirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
