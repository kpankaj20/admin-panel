import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/product/products/products.component';
const routes: Routes = [
  {
    path: "",
    component:ProductsComponent,
    data: {title: "", },
  },
  {
    path: 'category',
    loadChildren: () => import('src/app/component/category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'attribute',
    loadChildren: () => import('src/app/component/attribute/attribute.module').then(m => m.AttributeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
