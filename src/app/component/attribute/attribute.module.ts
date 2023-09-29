import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeRoutingModule } from './attribute-routing.module';
import { AttributesComponent } from './attributes/attributes.component';
import { MainLayoutModule } from 'src/app/layout/main-layout/main-layout.module';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';
@NgModule({
  declarations: [
    AttributesComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    AttributeRoutingModule,
    MainLayoutModule,
    DialogModule,
    ButtonModule,
    TableModule,
    ToastModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AttributeModule { }
