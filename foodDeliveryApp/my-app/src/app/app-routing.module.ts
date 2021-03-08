import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AmericanFoodComponent} from './american-food/american-food.component'
import { TexMexFoodComponent } from './tex-mex-food/tex-mex-food.component';
import { ChineseFoodComponent } from './chinese-food/chinese-food.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'americanFood', component: AmericanFoodComponent },
  {path: 'texMexFood', component: TexMexFoodComponent},
  {path: 'chineseFood', component: ChineseFoodComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
