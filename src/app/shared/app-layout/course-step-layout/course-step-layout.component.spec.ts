import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStepLayoutComponent } from './course-step-layout.component';

describe('CourseStepLayoutComponent', () => {
  let component: CourseStepLayoutComponent;
  let fixture: ComponentFixture<CourseStepLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseStepLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseStepLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
