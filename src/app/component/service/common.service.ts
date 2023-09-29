import {  Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Category } from '../model/category';
import { Attributes } from '../model/attribute';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  productlist:Array<Product>= new Array<Product>()
  categorylist:Array<Category>= new Array<Category>()
  attributelist:Array<Attributes>= new Array<Attributes>()

  getproduct(){
    return this.productlist=[
      {
        id:1,
        name: "table",
        description:"dining table",
        categoryId:"1",
        attributes:["wood", "home"],
      }
    ]
  }

  getattrbutelist(){
    return this.attributelist=[
      {
        id:1,
        name: "Color",
        value:["Red", "yellow", "green"],
      },
      {
        id:2,
        name: "Size",
        value:["S", "M", "L"],
      },
      {
        id:3,
        name: "price",
        value:["Selling Price", "Offer price"],
      }
    ]
  }

  getcategory(){
    return this.categorylist=[
      {
        id:1,
        name:"Electronics",
        parentId:0
      },
      {
        id:2,
        name:"Fashion",
        parentId:0
      },

      {
        id:101,
        name:"Laptop",
        parentId:1,
      },
      {
        id:102,
        name:"phone",
        parentId:1
      },
      
      {
        id:103,
        name:"T shirts",
        parentId:2,
      },
      {
        id:103,
        name:"Jeans",
        parentId:2
      },
    ]
  }
}
