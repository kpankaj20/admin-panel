import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { MainLayoutModule } from 'src/app/layout/main-layout/main-layout.module';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
// import { CommonService } from '../service/common.service';
@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    MainLayoutModule,
    CategoryRoutingModule,
    DialogModule,
    ButtonModule,
    TableModule,
    ToastModule
  ],

})
export class CategoryModule { }
