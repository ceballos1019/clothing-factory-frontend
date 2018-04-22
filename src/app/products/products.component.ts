import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Order } from '../shared/order';
import { Product, ProductType } from '../shared/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  order: Order = new Order();
  productTypes = ProductType;
  products: Product[] = [
    {
      id:0,
      type:this.productTypes[0],
      price:2500,
      quantity:0
    },
    {
      id:1,
      type:this.productTypes[1],
      price:3000,
      quantity:0
    },
    {
      id:2,
      type:this.productTypes[2],
      price:3001,
      quantity:0
    }
  ];



  docTypes: string[] = ["Cedula de ciudadania", "Cedula de extranjeria", "NIT"];

  constructor(private orderService: OrderService) {

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.order);
    console.log(this.products);
    this.order.detail = this.products;


    this.orderService.addOrder(this.order).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured 2");
      }
    );

  }

}
