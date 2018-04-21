import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  errMessage: string;

  onSubmit() {
    let order: Order = {
      name: "TestName";
      docType: 'CC';
      docNumber: 121315;
      date: '12-05-2018';
      address: 'Avenida Colombia';
      quantity: 5;
      detail: [
        {
          product: {
            id: 1;
            name: 'Sueter';
            type: 'Camisas formales';
            price: 23000;
          };
          quantity: 3;
        }
      ];
      totalValue: 45000;
    };

    this.orderService.addOrder(order).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured 2");
        this.errMessage = "Error";
      }
    );;

  }

}
