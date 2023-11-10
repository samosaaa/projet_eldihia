import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryKarakouComponent } from './category-karakou.component';

describe('CategoryKarakouComponent', () => {
  let component: CategoryKarakouComponent;
  let fixture: ComponentFixture<CategoryKarakouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryKarakouComponent]
    });
    fixture = TestBed.createComponent(CategoryKarakouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
