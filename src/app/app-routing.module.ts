import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {CreationComponent} from "./creation/creation.component";
import {CategoryKabyleComponent} from "./category/category-kabyle/category-kabyle.component";
import {CategoryCaftanComponent} from "./category/category-caftan/category-caftan.component";
import {CategoryChaouiComponent} from "./category/category-chaoui/category-chaoui.component";
import {CategoryKarakouComponent} from "./category/category-karakou/category-karakou.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {MaisonComponent} from "./maison/maison.component";

const routes: Routes = [
  {path: '', component: AccueilComponent, pathMatch: "full"},
  {path:'creation',component:CreationComponent},
  {path:'kabyle',component:CategoryKabyleComponent},
  {path:'caftan',component:CategoryCaftanComponent},
  {path:'chaoui',component:CategoryChaouiComponent},
  {path:'karakou',component:CategoryKarakouComponent},
  {path: 'product/:id',component: ProductDetailComponent},
  {path:'maison',component:MaisonComponent},
  {path: '**', component: AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
