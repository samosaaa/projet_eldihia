import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonComponent } from './maison.component';

describe('MaisonComponent', () => {
  let component: MaisonComponent;
  let fixture: ComponentFixture<MaisonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaisonComponent]
    });
    fixture = TestBed.createComponent(MaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
