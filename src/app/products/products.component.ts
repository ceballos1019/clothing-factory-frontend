import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Order } from '../shared/order';
import { Product, ProductType } from '../shared/product';

const MAX_CLOTHES: number = 5;

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
      type:this.productTypes[0],
      price:2500,
      quantity:0
    },
    {
      type:this.productTypes[1],
      price:3000,
      quantity:0
    },
    {
      type:this.productTypes[2],
      price:3001,
      quantity:0
    }
  ];

  docTypes: string[] = ["Cedula de ciudadania", "Cedula de extranjeria", "NIT"];
  maxClothes = MAX_CLOTHES;
  requestMessage: string;

  constructor(private orderService: OrderService) {

  }

  ngOnInit() {
    this.order.quantity = 0;
    this.order.totalValue = 0;
  }

  onSubmit() {
    console.log(this.order);
    console.log(this.products);
    this.order.detail = this.products;


    this.orderService.addOrder(this.order).subscribe(
      res => {
        this.requestMessage = "Tu pedido ha sido registrado exitosamente";
      },
      err => {
        this.requestMessage = "Error generando el pedido. Por favor intente más tarde";
      }
    );

  }

  addClothes(index: number) {
    if(this.order.quantity !== MAX_CLOTHES) {
      this.products[index].quantity++;
      this.order.quantity++;
      this.order.totalValue += this.products[index].price;

    }
  }

  removeClothes(index: number) {
    this.products[index].quantity--;
    this.order.quantity--;
    this.order.totalValue -= this.products[index].price;
  }
}
