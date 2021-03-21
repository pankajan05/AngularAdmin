import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProductComponent} from './products/add-product/add-product.component';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {AddCategoryComponent} from './add-category/add-category.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductsComponent},
  {path: 'product/add', component: AddProductComponent},
  {path: 'product/edit', component: AddProductComponent},
  {path: 'addCategory', component: AddCategoryComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
