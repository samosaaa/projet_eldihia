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
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {FavorisComponent} from "./favoris/favoris.component";
import {AccueilComponent} from './accueil/accueil.component';
import {ArticleComponent} from './article/article.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

import {ProductsService} from "./services/products/products.service";
import mockServer from './mock/app.mock';
import {CreationComponent} from './creation/creation.component';
import {CategoryKabyleComponent} from './category/category-kabyle/category-kabyle.component';
import {CategoryCaftanComponent} from './category/category-caftan/category-caftan.component';
import {CategoryChaouiComponent} from './category/category-chaoui/category-chaoui.component';
import {CategoryKarakouComponent} from './category/category-karakou/category-karakou.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';


mockServer();

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    AccueilComponent,
    ArticleComponent,
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
  providers:
    [ProductsService],
  bootstrap:
    [AppComponent]

})

export class AppModule {
}
