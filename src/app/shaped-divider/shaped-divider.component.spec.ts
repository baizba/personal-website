import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapedDividerComponent } from './shaped-divider.component';

describe('ShapedDividerComponent', () => {
  let component: ShapedDividerComponent;
  let fixture: ComponentFixture<ShapedDividerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShapedDividerComponent]
    });
    fixture = TestBed.createComponent(ShapedDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
