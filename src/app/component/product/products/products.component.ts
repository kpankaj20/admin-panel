import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { CommonService } from '../../service/common.service';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '../../model/category';
import { Attributes } from '../../model/attribute';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [MessageService]
})
export class ProductsComponent {
  visible: boolean = false;
  productlist: Array<Product> = new Array<Product>()
  catlist:Array<Category>= new Array<Category>()
  attributeslist: Array<Attributes> = new Array<Attributes>();
  product: Product = new Product()
  CreateForm!: FormGroup;

  constructor(private commonservice: CommonService, private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.CreateForm = this.fb.group({
      ...this.product
    })
    this.getproductlist();
    this.getcatgroylist();
    this.getattlist();

  }

  async getproductlist() {
    this.productlist = await this.commonservice.getproduct()
  }

  async getcatgroylist(){
    this.catlist= await this.commonservice.getcategory()
     }

     async getattlist() {
      this.attributeslist = await this.commonservice.getattrbutelist()
    }

  Onsubmit() {
    console.log(this.CreateForm.value)
    this.product = this.CreateForm.value;
    console.log(this.product)
    if (this.product.id === null) {

      this.product.id = this.productlist.length + 1;
      this.productlist.push(this.product);
      console.log(this.product)
      this.hideDialog()
      this.product = new Product();
      this.CreateForm.reset()
    }
    else {

      this.product = this.CreateForm.value;

      this.productlist.forEach((obj, index) => {
        if (obj.id === this.product.id) {
          obj.name = this.product.name;
          obj.description = this.product.description;
          return
        }
      })
      this.productlist = [...this.productlist]
      console.log(this.productlist)
      this.hideDialog()
      this.product = new Product();
      this.CreateForm.reset();
      this.getproductlist()

    }

  }



  selectProduct(cat: Product) {
    this.showDialog()
    this.CreateForm.patchValue({
      ...cat
    })
  }

  deleteProduct(cat: Product) {
    console.log
    this.productlist.forEach((obj, index) => {
      if (obj.id === cat.id) {
        this.productlist.splice(index, 1)
        return
      }
    })
  }

  showDialog() {
    this.visible = true;
  }
  hideDialog() {
    this.visible = false;
  }

}
