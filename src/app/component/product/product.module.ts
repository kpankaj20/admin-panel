import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import { MainLayoutModule } from 'src/app/layout/main-layout/main-layout.module';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from 'primeng/api';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [ProductsComponent,DropdownComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MainLayoutModule,
    DialogModule,
    ButtonModule,
    TableModule,
    ToastModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MultiSelectModule
    
  ]
})
export class ProductModule { }
