import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {AccueilComponent} from './accueil/accueil.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {FavorisComponent} from "./favoris/favoris.component";


import {ProductsService} from "./services/products/products.service";
import mockServer from './mock/app.mock';
import {CreationComponent} from './creation/creation.component';
import {CategoryKabyleComponent} from './category/category-kabyle/category-kabyle.component';
import {CategoryCaftanComponent} from './category/category-caftan/category-caftan.component';
import {CategoryChaouiComponent} from './category/category-chaoui/category-chaoui.component';
import {CategoryKarakouComponent} from './category/category-karakou/category-karakou.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {UserService} from "./services/user/user.service";
import {AuthService} from "./services/authentication/auth.service";
import {MaisonComponent} from './maison/maison.component';
import {CartComponent} from './cart/cart.component';

mockServer();

@NgModule({
    declarations: [
        AppComponent,
        InscriptionComponent,
        ConnexionComponent,
        AccueilComponent,
        HeaderComponent,
        FooterComponent,
        CreationComponent,
        CategoryKabyleComponent,
        CategoryCaftanComponent,
        CategoryChaouiComponent,
        CategoryKarakouComponent,
        ProductDetailComponent,
        FavorisComponent,
        MaisonComponent,
        CartComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatDividerModule,
        MatInputModule,
        MatFormFieldModule,
        MatStepperModule,
        MatCardModule,
        MatExpansionModule,
        MatGridListModule,
    ],
    providers: [ProductsService, UserService,
        AuthService,],
    bootstrap: [AppComponent]
})
export class AppModule {
}
