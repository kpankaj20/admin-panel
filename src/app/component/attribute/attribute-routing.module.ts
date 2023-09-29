import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributesComponent } from './attributes/attributes.component';

const routes: Routes = [
  {
    path: "",
    component:AttributesComponent,
    data: {title: "attribute",
   },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttributeRoutingModule { }
