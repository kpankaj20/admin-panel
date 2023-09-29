import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Attributes } from '../../model/attribute';
import { CommonService } from '../../service/common.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss'],
  providers: [MessageService]
})
export class AttributesComponent implements OnInit, AfterViewChecked {
  visible: boolean = false;
  attributeslist: Array<Attributes> = new Array<Attributes>();
  attributes: Attributes = new Attributes()
  CreateForm!: FormGroup;
  reload: boolean = true


  constructor(private commonservice: CommonService, private fb: FormBuilder, private cdr: ChangeDetectorRef) {
  }
  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.CreateForm = this.fb.group({
      ...this.attributes
    })

    this.getcatgroylist()
  }

  async getcatgroylist() {
    this.attributeslist = await this.commonservice.getattrbutelist()
  }

  Onsubmit() {
    this.attributes = this.CreateForm.value;
    if (this.attributes.id === null) {

      this.attributes.id = this.attributeslist.length + 1;
      this.attributeslist.push(this.attributes);
      console.log(this.attributes)
      this.hideDialog()
      this.attributes = new Attributes();
      this.CreateForm.reset()
    }
    else {

      this.attributes = this.CreateForm.value;

      this.attributeslist.forEach((obj, index) => {
        if (obj.id === this.attributes.id) {
          obj.name = this.attributes.name;
          obj.value = [...this.attributes.value]
          return
        }
      })
      this.attributeslist = [...this.attributeslist]
      console.log(this.attributeslist)
      this.hideDialog()
      this.attributes = new Attributes();
      this.CreateForm.reset();
      this.getcatgroylist()

    }

  }



  selectProduct(cat: Attributes) {
    this.showDialog()
    this.CreateForm.patchValue({
      ...cat
    })
  }

  deleteProduct(cat: Attributes) {
    console.log
    this.attributeslist.forEach((obj, index) => {
      if (obj.id === cat.id) {
        this.attributeslist.splice(index, 1)
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

