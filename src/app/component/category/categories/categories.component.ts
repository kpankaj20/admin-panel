import { Component } from '@angular/core';
import { Product } from '../../model/product';

import { Category } from '../../model/category';
import { MessageService } from 'primeng/api';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers:[MessageService]
})
export class CategoriesComponent {
  visible: boolean = false;
  catlist:Array<Category>= new Array<Category>()

  constructor(private commonservice:CommonService){
  }
  ngOnInit(): void {
 this.getcatgroylist()
  }

 async getcatgroylist(){
 this.catlist= await this.commonservice.getcategory()
  }

  selectProduct(cat:Category){
    console.log(cat)
  }

  showDialog() {
      this.visible = true;
  }

}
