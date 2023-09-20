import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNavberComponent } from './category-navber.component';

describe('CategoryNavberComponent', () => {
  let component: CategoryNavberComponent;
  let fixture: ComponentFixture<CategoryNavberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryNavberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryNavberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
