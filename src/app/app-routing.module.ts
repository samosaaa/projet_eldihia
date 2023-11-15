import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from "./component/accueil/accueil.component";
import {ConnexionComponent} from "./component/connexion/connexion.component";
import {InscriptionComponent} from "./component/inscription/inscription.component";
import {FavorisComponent} from "./component/favoris/favoris.component";
import {CreationComponent} from "./component/creation/creation.component";
import {CategoryKabyleComponent} from "./component/category/category-kabyle/category-kabyle.component";
import {CategoryCaftanComponent} from "./component/category/category-caftan/category-caftan.component";
import {CategoryChaouiComponent} from "./component/category/category-chaoui/category-chaoui.component";
import {CategoryKarakouComponent} from "./component/category/category-karakou/category-karakou.component";
import {ProductDetailComponent} from "./component/product-detail/product-detail.component";
import {MaisonComponent} from "./component/maison/maison.component";
import {CartComponent} from "./component/cart/cart.component";
import {AdminGuard} from "./guard/admin.guard";
import {AdminComponent} from "./component/admin/admin.component";

const routes: Routes = [
  {path: '', component: AccueilComponent, pathMatch: "full"},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'favoris', component: FavorisComponent},
  {path: 'creation', component: CreationComponent},
  {path: 'kabyle', component: CategoryKabyleComponent},
  {path: 'caftan', component: CategoryCaftanComponent},
  {path: 'chaoui', component: CategoryChaouiComponent},
  {path: 'karakou', component: CategoryKarakouComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path:'maison',component:MaisonComponent},
  {path:'panier',component:CartComponent},
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {path: '**', component: AccueilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
