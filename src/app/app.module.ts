import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ArticleComponent} from './article/article.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductsService} from "./services/products/products.service";
import mockServer from './mock/app.mock';
import {CreationComponent} from './creation/creation.component';
import {CategoryKabyleComponent} from './category/category-kabyle/category-kabyle.component';
import {CategoryCaftanComponent} from './category/category-caftan/category-caftan.component';
import {CategoryChaouiComponent} from './category/category-chaoui/category-chaoui.component';
import {CategoryKarakouComponent} from './category/category-karakou/category-karakou.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {MaisonComponent} from './maison/maison.component';
import {CartComponent} from './cart/cart.component';

mockServer();

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    AccueilComponent,
    ArticleComponent,
    HeaderComponent,
    FooterComponent,
    CreationComponent,
    CategoryKabyleComponent,
    CategoryCaftanComponent,
    CategoryChaouiComponent,
    CategoryKarakouComponent,
    ProductDetailComponent,
    MaisonComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
