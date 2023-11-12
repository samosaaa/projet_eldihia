import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {FavorisComponent} from "./favoris/favoris.component";

const routes: Routes = [
  { path: '', component: AccueilComponent, pathMatch: "full"},
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'favoris', component: FavorisComponent },
  { path: '**', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
