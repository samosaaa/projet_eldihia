import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoryChaouiComponent} from './category-chaoui.component';

describe('CategoryChaouiComponent', () => {
    let component: CategoryChaouiComponent;
    let fixture: ComponentFixture<CategoryChaouiComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CategoryChaouiComponent]
        });
        fixture = TestBed.createComponent(CategoryChaouiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
