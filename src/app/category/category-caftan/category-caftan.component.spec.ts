import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCaftanComponent } from './category-caftan.component';

describe('CategoryCaftanComponent', () => {
  let component: CategoryCaftanComponent;
  let fixture: ComponentFixture<CategoryCaftanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryCaftanComponent]
    });
    fixture = TestBed.createComponent(CategoryCaftanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
