import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {CreationComponent} from "./creation/creation.component";

const routes: Routes = [
  {path: '', component: AccueilComponent, pathMatch: "full"},
  {path:'creation',component:CreationComponent},
  {path: '**', component: AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
