import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisComponent } from './favoris.component';

describe('UserLoginComponent', () => {
  let component: FavorisComponent;
  let fixture: ComponentFixture<FavorisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavorisComponent]
    });
    fixture = TestBed.createComponent(FavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
