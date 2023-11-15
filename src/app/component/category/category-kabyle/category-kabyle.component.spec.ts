import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoryKabyleComponent} from './category-kabyle.component';

describe('CategoryKabyleComponent', () => {
    let component: CategoryKabyleComponent;
    let fixture: ComponentFixture<CategoryKabyleComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CategoryKabyleComponent]
        });
        fixture = TestBed.createComponent(CategoryKabyleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
