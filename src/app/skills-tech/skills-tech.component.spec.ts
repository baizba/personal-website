import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTechComponent } from './skills-tech.component';

describe('SkillsTechComponent', () => {
  let component: SkillsTechComponent;
  let fixture: ComponentFixture<SkillsTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsTechComponent]
    });
    fixture = TestBed.createComponent(SkillsTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
