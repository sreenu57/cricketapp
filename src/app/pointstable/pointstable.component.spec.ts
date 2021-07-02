import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointstableComponent } from './pointstable.component';

describe('PointstableComponent', () => {
  let component: PointstableComponent;
  let fixture: ComponentFixture<PointstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
