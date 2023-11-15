import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InscriptionComponent} from './component/inscription/inscription.component';
import {ConnexionComponent} from './component/connexion/connexion.component';
import {FavorisComponent} from "./component/favoris/favoris.component";
import {AccueilComponent} from './component/accueil/accueil.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {AdminComponent } from './component/admin/admin.component';
import {MaisonComponent} from './component/maison/maison.component';
import {CartComponent} from './component/cart/cart.component';
import {CreationComponent} from "./component/creation/creation.component";
import {CategoryKabyleComponent} from "./component/category/category-kabyle/category-kabyle.component";
import {CategoryCaftanComponent} from "./component/category/category-caftan/category-caftan.component";
import {CategoryChaouiComponent} from "./component/category/category-chaoui/category-chaoui.component";
import {CategoryKarakouComponent} from "./component/category/category-karakou/category-karakou.component";
import {ProductDetailComponent} from "./component/product-detail/product-detail.component";
import mockServer from './mock/app.mock';
import {ProductsService} from "./services/products/products.service";
import {UserService} from "./services/user/user.service";
import {AuthService} from "./services/authentication/auth.service";
import {SnackbarService} from "./services/snackbar/snackbar.service";


mockServer();

@NgModule({
    declarations: [
        AppComponent,
        ConnexionComponent,
        AccueilComponent,
        HeaderComponent,
        FooterComponent,
        InscriptionComponent,
        FavorisComponent,
        CreationComponent,
        CategoryKabyleComponent,
        CategoryCaftanComponent,
        CategoryChaouiComponent,
        CategoryKarakouComponent,
        ProductDetailComponent,
        MaisonComponent,
        CartComponent,
        AdminComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatInputModule,
        MatFormFieldModule,
        MatStepperModule,
        MatCardModule,
        MatExpansionModule,
        MatGridListModule,
        MatSnackBarModule,
        MatToolbarModule,
    ],
    providers:
        [
            ProductsService,
            UserService,
            AuthService,
            SnackbarService,
        ],
    bootstrap:
        [AppComponent]

})

export class AppModule {
}
